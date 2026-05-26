interface PageSectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'darker';
  className?: string;
}

export default function PageSection({
  children,
  variant = 'default',
  className = '',
}: PageSectionProps) {
  const bg = variant === 'darker' ? 'bg-dark/40' : '';
  return (
    <section className={`py-16 md:py-24 px-6 md:px-12 ${bg} ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
