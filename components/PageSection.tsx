interface PageSectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'darker';
  className?: string;
}

/**
 * Content section that adapts to light/dark mode.
 *   - 'default' variant: page-bg (light page in light mode, transparent over the dark gradient in dark mode)
 *   - 'darker' variant: a tinted band (light gray in light mode, dark navy in dark mode)
 *
 * Text inside should use the themed text colors via the `kw-text-heading` /
 * `kw-text-body` / `kw-text-muted` utility classes, or the inline tokens
 * defined in globals.css. Tailwind's `text-white` / `text-gray-300` etc.
 * still work for static dark contexts (hero, navbar) but won't theme-swap.
 */
export default function PageSection({
  children,
  variant = 'default',
  className = '',
}: PageSectionProps) {
  const bgClass = variant === 'darker' ? 'kw-bg-section' : '';
  return (
    <section className={`kw-page-section py-16 md:py-24 px-6 md:px-12 ${bgClass} ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
