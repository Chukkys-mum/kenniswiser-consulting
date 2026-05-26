'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface KoraWidgetProps {
  projectKey: string;
  apiUrl?: string;
  position?: 'bottom-right' | 'bottom-left';
  primaryColor?: string;
  greeting?: string;
  title?: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const DEFAULT_API = 'https://kora-api-gamma.vercel.app';

export default function KoraWidget({
  projectKey,
  apiUrl = DEFAULT_API,
  position = 'bottom-right',
  primaryColor = '#7c3aed',
  greeting = "Hi! I'm KORA. How can I help you?",
  title = 'KORA',
}: KoraWidgetProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || streaming) return;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setStreaming(true);
    try {
      const res = await fetch(`${apiUrl}/api/kora/embed/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Kora-Key': projectKey },
        body: JSON.stringify({ message: text }),
      });
      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: "Sorry, I couldn't process that." },
        ]);
        return;
      }
      const json = await res.json().catch(() => null);
      if (json) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: json.response || json.content || 'No response.' },
        ]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Connection error.' }]);
    } finally {
      setStreaming(false);
    }
  }, [input, streaming, apiUrl, projectKey]);

  const pos = position === 'bottom-left' ? 'left-5 bottom-5' : 'right-5 bottom-5';

  return (
    <>
      {open && (
        <div
          className={`fixed ${pos} z-[9999] mb-16 w-[380px] max-h-[520px] flex flex-col rounded-2xl shadow-2xl overflow-hidden`}
          style={{
            backgroundColor: '#0f172a',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: primaryColor + '15' }}
          >
            <div className="flex items-center gap-2">
              <div
                className="h-7 w-7 rounded-full flex items-center justify-center text-white p-1"
                style={{ backgroundColor: primaryColor }}
              >
                <svg viewBox="0 0 595.28 595.28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M272.45,276.29c-2.95-2.95-6.34-5.27-10.17-6.96-3.83-1.69-7.9-2.53-12.23-2.53s-8.49.84-12.32,2.53c-3.83,1.69-7.19,4.01-10.08,6.96-2.9,2.95-5.16,6.34-6.79,10.17-1.63,3.83-2.45,7.88-2.45,12.15s.81,8.49,2.45,12.32c1.63,3.83,3.89,7.19,6.79,10.08,2.9,2.9,6.26,5.16,10.08,6.79,3.82,1.63,7.93,2.45,12.32,2.45s8.41-.81,12.23-2.45c3.83-1.63,7.21-3.89,10.17-6.79,2.95-2.9,5.26-6.26,6.92-10.08,1.66-3.83,2.49-7.93,2.49-12.32s-.83-8.32-2.49-12.15c-1.66-3.82-3.97-7.21-6.92-10.17ZM267.77,306.33c-.96,2.39-2.28,4.5-3.97,6.33-1.69,1.83-3.67,3.25-5.95,4.26-2.28,1.01-4.74,1.52-7.38,1.52s-5.3-.51-7.64-1.52c-2.33-1.01-4.39-2.43-6.16-4.26-1.77-1.83-3.15-3.94-4.13-6.33-.99-2.39-1.48-4.96-1.48-7.72s.48-5.43,1.43-7.85c.96-2.42,2.31-4.54,4.05-6.37,1.74-1.83,3.77-3.25,6.08-4.26,2.31-1.01,4.81-1.52,7.51-1.52s5.2.51,7.51,1.52c2.31,1.01,4.32,2.43,6.03,4.26,1.71,1.83,3.07,3.95,4.05,6.37.98,2.42,1.48,5.04,1.48,7.85s-.48,5.33-1.43,7.72ZM359.36,302.91c1.71-2.08,2.95-4.39,3.71-6.92.76-2.53,1.14-5.06,1.14-7.59,0-3.21-.54-6.09-1.6-8.65-1.07-2.56-2.63-4.75-4.68-6.58-2.05-1.83-4.6-3.23-7.64-4.22-3.04-.98-6.5-1.48-10.38-1.48h-18.82v62.1h12.23v-19.74h8.15l13.12,19.74h14.26l-14.47-22.57c1.98-1.12,3.65-2.48,4.97-4.09ZM333.33,279.29h8.78c2.14,0,3.84.37,5.11,1.1,1.27.73,2.21,1.63,2.83,2.7.62,1.07,1.03,2.12,1.22,3.16.2,1.04.3,1.9.3,2.57,0,.9-.16,1.87-.46,2.91-.31,1.04-.82,2.04-1.52,3-.7.96-1.67,1.74-2.91,2.36-1.24.62-2.79.93-4.64.93h-8.69v-18.73ZM441.5,329.58l-14.81-37.59-15.65,37.59h-12.07l28.01-64.55h.67l28.01,64.55h-14.17ZM152,275.64l-12.4,14.16v-22.32h12.4v8.17ZM163.98,295.32l25.74,34.26h-15.53l-19.15-26.49-3.04,3.04v23.46h-12.4v-23.1l12.07-13.77,22.11-25.23h15.86l-25.65,27.85Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-[10px] text-gray-400">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white"
              aria-label="Close KORA"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div
            className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[200px] max-h-[360px]"
            style={{ backgroundColor: '#0a0e1a' }}
          >
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-sm text-gray-400">{greeting}</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[85%] rounded-xl px-3 py-2 text-sm"
                  style={{
                    backgroundColor: m.role === 'user' ? primaryColor : '#1e293b',
                    color: m.role === 'user' ? '#fff' : '#e2e8f0',
                  }}
                >
                  {m.content || (streaming && i === messages.length - 1 ? '...' : '')}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div
            className="px-3 py-2"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.05)',
              backgroundColor: '#0f172a',
            }}
          >
            <div className="flex gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Type a message..."
                rows={1}
                className="flex-1 resize-none rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
              <button
                onClick={send}
                disabled={streaming || !input.trim()}
                className="shrink-0 rounded-lg px-3 py-2 text-white disabled:opacity-40"
                style={{ backgroundColor: primaryColor }}
                aria-label="Send"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed ${pos} z-[9999] h-14 w-14 rounded-full shadow-lg flex items-center justify-center text-white transition-transform hover:scale-105`}
        style={{ backgroundColor: primaryColor }}
        aria-label="Open KORA"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          // Official KORA wordmark (path data from Marketing/Logos/KORA/SVG/KORA Logo_White.svg)
          <svg width="32" height="32" viewBox="0 0 595.28 595.28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M272.45,276.29c-2.95-2.95-6.34-5.27-10.17-6.96-3.83-1.69-7.9-2.53-12.23-2.53s-8.49.84-12.32,2.53c-3.83,1.69-7.19,4.01-10.08,6.96-2.9,2.95-5.16,6.34-6.79,10.17-1.63,3.83-2.45,7.88-2.45,12.15s.81,8.49,2.45,12.32c1.63,3.83,3.89,7.19,6.79,10.08,2.9,2.9,6.26,5.16,10.08,6.79,3.82,1.63,7.93,2.45,12.32,2.45s8.41-.81,12.23-2.45c3.83-1.63,7.21-3.89,10.17-6.79,2.95-2.9,5.26-6.26,6.92-10.08,1.66-3.83,2.49-7.93,2.49-12.32s-.83-8.32-2.49-12.15c-1.66-3.82-3.97-7.21-6.92-10.17ZM267.77,306.33c-.96,2.39-2.28,4.5-3.97,6.33-1.69,1.83-3.67,3.25-5.95,4.26-2.28,1.01-4.74,1.52-7.38,1.52s-5.3-.51-7.64-1.52c-2.33-1.01-4.39-2.43-6.16-4.26-1.77-1.83-3.15-3.94-4.13-6.33-.99-2.39-1.48-4.96-1.48-7.72s.48-5.43,1.43-7.85c.96-2.42,2.31-4.54,4.05-6.37,1.74-1.83,3.77-3.25,6.08-4.26,2.31-1.01,4.81-1.52,7.51-1.52s5.2.51,7.51,1.52c2.31,1.01,4.32,2.43,6.03,4.26,1.71,1.83,3.07,3.95,4.05,6.37.98,2.42,1.48,5.04,1.48,7.85s-.48,5.33-1.43,7.72ZM359.36,302.91c1.71-2.08,2.95-4.39,3.71-6.92.76-2.53,1.14-5.06,1.14-7.59,0-3.21-.54-6.09-1.6-8.65-1.07-2.56-2.63-4.75-4.68-6.58-2.05-1.83-4.6-3.23-7.64-4.22-3.04-.98-6.5-1.48-10.38-1.48h-18.82v62.1h12.23v-19.74h8.15l13.12,19.74h14.26l-14.47-22.57c1.98-1.12,3.65-2.48,4.97-4.09ZM333.33,279.29h8.78c2.14,0,3.84.37,5.11,1.1,1.27.73,2.21,1.63,2.83,2.7.62,1.07,1.03,2.12,1.22,3.16.2,1.04.3,1.9.3,2.57,0,.9-.16,1.87-.46,2.91-.31,1.04-.82,2.04-1.52,3-.7.96-1.67,1.74-2.91,2.36-1.24.62-2.79.93-4.64.93h-8.69v-18.73ZM441.5,329.58l-14.81-37.59-15.65,37.59h-12.07l28.01-64.55h.67l28.01,64.55h-14.17ZM152,275.64l-12.4,14.16v-22.32h12.4v8.17ZM163.98,295.32l25.74,34.26h-15.53l-19.15-26.49-3.04,3.04v23.46h-12.4v-23.1l12.07-13.77,22.11-25.23h15.86l-25.65,27.85Z" />
          </svg>
        )}
      </button>
    </>
  );
}
