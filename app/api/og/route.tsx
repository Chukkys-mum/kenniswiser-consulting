import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const OG_SIZE = { width: 1200, height: 630 };

/**
 * Dynamic Open Graph image generator.
 *
 * Usage:
 *   - `/api/og` → default Kennis Wiser Consulting card
 *   - `/api/og?title=Careers&subtitle=Join%20us` → custom card
 *
 * Server-rendered at the edge, returned as PNG. Used in `metadata.openGraph.images`
 * across the site so link previews on LinkedIn, X, Slack, WhatsApp etc. render a
 * branded card instead of a default screenshot.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Kennis Wiser Consulting';
  const subtitle =
    searchParams.get('subtitle') ?? 'Strategic Counsel for Growth Capital';

  return new ImageResponse(
    (
      <div
        style={{
          background:
            'linear-gradient(135deg, #1a1a3e 0%, #0f0f1e 50%, #1a1a3e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top — brand chip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background:
                'linear-gradient(135deg, #4338ca 0%, #7c3aed 50%, #2ad0ff 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 32,
              color: '#ffffff',
            }}
          >
            K
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#9ca3af',
              fontWeight: 600,
              letterSpacing: '0.5px',
            }}
          >
            Kennis Wiser Consulting
          </div>
        </div>

        {/* Centre — headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#7c3aed',
            }}
          >
            Strategy Over Noise.
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              color: '#ffffff',
              letterSpacing: '-1.5px',
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: 28,
                color: '#d1d5db',
                marginTop: 12,
                maxWidth: 900,
                lineHeight: 1.3,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Bottom — URL */}
        <div
          style={{
            fontSize: 20,
            color: '#9ca3af',
            letterSpacing: '0.5px',
          }}
        >
          kenniswiserconsulting.com
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
