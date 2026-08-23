import React, { useState, useEffect } from 'react';
import {
  getStoredApiKey,
  saveStoredApiKey,
  removeStoredApiKey,
  getStoredEndpoint,
  saveStoredEndpoint,
  getStoredModel,
  saveStoredModel,
  DEFAULT_ENDPOINT,
  DIRECT_OPENROUTER_ENDPOINT,
  DEFAULT_MODEL,
  hasStoredApiKey,
} from '../utils/crypto';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [endpoint, setEndpoint] = useState(DEFAULT_ENDPOINT);
  const [model, setModel] = useState(DEFAULT_MODEL);
  const [customModelInput, setCustomModelInput] = useState('');
  const [isCustomModel, setIsCustomModel] = useState(false);

  // Custom Passphrase Encryption
  const [useCustomPassphrase, setUseCustomPassphrase] = useState(false);
  const [passphrase, setPassphrase] = useState('');
  const [showPassphrase, setShowPassphrase] = useState(false);

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isKeyEncryptedInStorage, setIsKeyEncryptedInStorage] = useState(false);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      setIsProcessing(true);
      setErrorMessage('');
      setSavedSuccess(false);

      const savedEndpoint = getStoredEndpoint();
      const savedModel = getStoredModel();

      setEndpoint(savedEndpoint || DEFAULT_ENDPOINT);

      const popularValues = [
        'google/gemma-4-26b-a4b-it',
        'openai/gpt-4o-mini',
        'mistralai/mistral-nemo',
        'anthropic/claude-3.5-haiku',
        'meta-llama/llama-3.3-70b-instruct',
        'qwen/qwen-2.5-72b-instruct',
      ];

      if (popularValues.includes(savedModel)) {
        setModel(savedModel);
        setIsCustomModel(false);
        setCustomModelInput('');
      } else {
        setModel('custom');
        setIsCustomModel(true);
        setCustomModelInput(savedModel);
      }

      // Check if encrypted key exists in storage
      setIsKeyEncryptedInStorage(hasStoredApiKey());

      getStoredApiKey()
        .then((savedKey) => {
          setApiKey(savedKey || '');
        })
        .catch((err) => {
          console.warn('Could not auto-decrypt key:', err);
          setErrorMessage('Could not auto-decrypt key. If you set a custom passphrase, please enter it.');
        })
        .finally(() => {
          setIsProcessing(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = async () => {
    setIsProcessing(true);
    setErrorMessage('');
    try {
      const effectivePassphrase = useCustomPassphrase && passphrase.trim() ? passphrase.trim() : undefined;

      if (apiKey.trim()) {
        await saveStoredApiKey(apiKey.trim(), effectivePassphrase);
        setIsKeyEncryptedInStorage(true);
      } else {
        removeStoredApiKey();
        setIsKeyEncryptedInStorage(false);
      }

      saveStoredEndpoint(endpoint.trim());

      const effectiveModel = isCustomModel && customModelInput.trim() ? customModelInput.trim() : model;
      if (effectiveModel.trim() && effectiveModel !== 'custom') {
        saveStoredModel(effectiveModel.trim());
      }

      setSavedSuccess(true);
      setTimeout(() => {
        setSavedSuccess(false);
        onClose();
      }, 1100);
    } catch (e) {
      console.error(e);
      setErrorMessage(e instanceof Error ? e.message : 'Failed to encrypt and save configuration.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClearKey = () => {
    setApiKey('');
    removeStoredApiKey();
    setIsKeyEncryptedInStorage(false);
  };

  const popularModels = [
    { label: 'Google Gemma 4 26B (Default)', value: 'google/gemma-4-26b-a4b-it' },
    { label: 'OpenAI GPT-4o Mini', value: 'openai/gpt-4o-mini' },
    { label: 'Mistral Nemo (Fast & Free)', value: 'mistralai/mistral-nemo' },
    { label: 'Anthropic Claude 3.5 Haiku', value: 'anthropic/claude-3.5-haiku' },
    { label: 'Meta Llama 3.3 70B Instruct', value: 'meta-llama/llama-3.3-70b-instruct' },
    { label: 'Qwen 2.5 72B Instruct', value: 'qwen/qwen-2.5-72b-instruct' },
    { label: 'Custom Model ID...', value: 'custom' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="glass-panel w-full max-w-xl rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-600/30 to-indigo-600/30 border border-rose-500/40 flex items-center justify-center text-rose-400 shadow-lg shadow-rose-600/20">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">AI Engine & Endpoint Settings</h3>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                AES-256-GCM
              </span>
            </div>
            <p className="text-xs text-slate-400">Configure router endpoint, encrypted API key & AI model</p>
          </div>
        </div>

        <div className="space-y-5">
          {/* Router Endpoint Configuration */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                OpenRouter / Proxy Router Endpoint
              </label>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setEndpoint(DEFAULT_ENDPOINT)}
                  className="text-[10px] text-rose-400 hover:text-rose-300 underline font-mono"
                >
                  Server Proxy (Default)
                </button>
                <span className="text-slate-400 text-[10px]">·</span>
                <button
                  type="button"
                  onClick={() => setEndpoint(DIRECT_OPENROUTER_ENDPOINT)}
                  className="text-[10px] text-indigo-400 hover:text-indigo-300 underline font-mono"
                >
                  Direct OpenRouter
                </button>
              </div>
            </div>
            <input
              type="text"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              placeholder="/api/openrouter/chat/completions"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 font-mono transition-colors"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Default server proxy keeps your API key secure without exposing it in browser request headers. You can also specify direct OpenRouter, Cloudflare AI Gateway, or LiteLLM endpoints.
            </p>
          </div>

          {/* Encrypted API Key Section */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                  Custom OpenRouter API Key
                </label>
                {isKeyEncryptedInStorage && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 font-mono">
                    Encrypted Stored
                  </span>
                )}
              </div>
              {apiKey && (
                <button
                  type="button"
                  onClick={handleClearKey}
                  className="text-[10px] text-rose-400 hover:text-rose-300 hover:underline"
                >
                  Clear Key
                </button>
              )}
            </div>

            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-or-v1-..."
                className="w-full bg-slate-950 border border-slate-700/90 rounded-xl px-3.5 py-2.5 pr-10 text-xs text-white focus:outline-none focus:border-rose-500 font-mono transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1 rounded"
                title={showKey ? 'Hide key' : 'Show key'}
              >
                {showKey ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                    />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-[11px] text-slate-300">
                Leave empty to use the server-side proxy (no API key in browser request headers). Custom keys are encrypted client-side using <strong className="text-slate-100">AES-256-GCM</strong> (PBKDF2 SHA-256 100k iterations) before being stored.
              </p>
            </div>

            {/* Optional Custom Master Passphrase Accordion */}
            <div className="pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setUseCustomPassphrase(!useCustomPassphrase)}
                className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 font-medium transition-colors"
              >
                <svg
                  className={`w-3.5 h-3.5 transform transition-transform ${useCustomPassphrase ? 'rotate-90' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Advanced: Custom Encryption Passphrase (Optional)</span>
              </button>

              {useCustomPassphrase && (
                <div className="mt-2.5 pl-4 space-y-2 border-l border-slate-700">
                  <p className="text-[10px] text-slate-400">
                    Provide your own secret passphrase to encrypt your API key. You will need to remember this passphrase on this device.
                  </p>
                  <div className="relative">
                    <input
                      type={showPassphrase ? 'text' : 'password'}
                      value={passphrase}
                      onChange={(e) => setPassphrase(e.target.value)}
                      placeholder="Enter custom encryption password..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 pr-9 text-xs text-white focus:outline-none focus:border-rose-500 font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassphrase(!showPassphrase)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1"
                    >
                      {showPassphrase ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Model Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Select OpenRouter Model
            </label>
            <select
              value={model}
              onChange={(e) => {
                const val = e.target.value;
                setModel(val);
                setIsCustomModel(val === 'custom');
              }}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 cursor-pointer transition-colors"
            >
              {popularModels.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>

            {isCustomModel && (
              <div className="mt-2">
                <input
                  type="text"
                  value={customModelInput}
                  onChange={(e) => setCustomModelInput(e.target.value)}
                  placeholder="e.g. meta-llama/llama-3.1-405b-instruct or deepseek/deepseek-r1"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white font-mono focus:outline-none focus:border-rose-500"
                />
              </div>
            )}
          </div>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="mt-4 p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-xs text-rose-300 flex items-start gap-2">
            <svg className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Success message */}
        {savedSuccess && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Settings & encrypted key saved successfully!</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs text-slate-400 hover:text-white rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={isProcessing}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-xl shadow-md shadow-rose-600/30 transition-all disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>Encrypting & Saving...</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Save Configuration</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

