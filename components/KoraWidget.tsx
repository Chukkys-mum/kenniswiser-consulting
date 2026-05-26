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
            {/* Header avatar — official KORA gradient logo (design system: KORA-LOGO-CHAT-HEADER).
                Source: Marketing/Logos/KORA/SVG/KORA Logo_Gradient.svg → /public/logos/kora-logo.svg */}
            <div className="flex items-center gap-2">
              <img
                src="/logos/kora-logo.svg"
                alt="KORA"
                width={36}
                height={36}
                className="h-9 w-9 rounded-md bg-white/10 p-1 object-contain"
              />
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
      {/* Floating KORA chat button (design system: KORA-LOGO-CHAT-BUTTON).
          Sized so the brand mark fills ~75% of the button — larger than the
          earlier 32-in-56 ratio that made the logo look diminutive.
          Logo source: Marketing/Logos/KORA/SVG/KORA Logo_Gradient.svg */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed ${pos} z-[9999] h-16 w-16 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105`}
        style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 14px rgba(97, 69, 237, 0.35)' }}
        aria-label="Open KORA"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={primaryColor} strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <img
            src="/logos/kora-logo.svg"
            alt="KORA"
            width={56}
            height={56}
            className="w-14 h-14 object-contain"
          />
        )}
      </button>
    </>
  );
}
