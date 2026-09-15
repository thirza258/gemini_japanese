let finishActive: (() => void) | undefined;

export function stopJapaneseAudio(): void {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  finishActive?.();
}

/** Play a Japanese utterance and settle the previous request when audio changes. */
export function playJapaneseAudio(text: string, rate = 0.9): Promise<void> {
  stopJapaneseAudio();
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      resolve();
      return;
    }
    let timeout: ReturnType<typeof setTimeout>;
    const finish = () => {
      clearTimeout(timeout);
      if (finishActive === finish) finishActive = undefined;
      resolve();
    };
    finishActive = finish;
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      utterance.rate = rate;
      utterance.pitch = 1;
      const voice = window.speechSynthesis
        .getVoices()
        .find((item) => item.lang.startsWith("ja"));
      if (voice) utterance.voice = voice;
      utterance.onend = finish;
      utterance.onerror = finish;
      // Some engines omit completion events when interrupted or unavailable.
      timeout = setTimeout(
        () => {
          if (finishActive === finish) window.speechSynthesis.cancel();
          finish();
        },
        Math.min(120000, Math.max(12000, text.length * 550)),
      );
      window.speechSynthesis.speak(utterance);
    } catch {
      finish();
    }
  });
}
