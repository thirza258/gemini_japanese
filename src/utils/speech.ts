/**
 * Plays Japanese Speech Audio using Web Speech API
 */
export function playJapaneseAudio(text: string, rate: number = 0.9): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.');
      resolve();
      return;
    }

    try {
      window.speechSynthesis.cancel(); // Stop any pending utterance

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = rate; // Slightly slower for clear Japanese learner pronunciation
      utterance.pitch = 1.0;

      // Find best Japanese voice if available
      const voices = window.speechSynthesis.getVoices();
      const jaVoice = voices.find(
        (v) => v.lang === 'ja-JP' || v.lang.startsWith('ja') || v.name.includes('Japanese')
      );
      if (jaVoice) {
        utterance.voice = jaVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error('Speech synthesis error:', e);
      resolve();
    }
  });
}
