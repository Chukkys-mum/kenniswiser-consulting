interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

/**
 * Hero band that always stays dark — same convention as Kennis Capital
 * (hero / navbar / footer don't swap themes, only content sections do).
 */
export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-20 pb-24 px-6 md:px-12 border-b border-primary-700/20"
      style={{ background: 'linear-gradient(135deg, #1a1a3e 0%, #0f0f1e 50%, #1a1a3e 100%)' }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          {label}
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
