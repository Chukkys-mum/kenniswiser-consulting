'use client';

export default function CTA() {
  return (
    <section id="contact" className="section">
      <div className="bg-gradient-to-r from-primary-800 via-accent/20 to-primary-800 rounded-2xl p-12 md:p-16 text-center border border-accent/30">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Shape Your Investment Future
          </h2>

          <p className="text-xl text-gray-300">
            Whether you're navigating an acquisition, scaling a portfolio company, or exploring new opportunities, we're here to provide the strategic clarity you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="mailto:dean.bryan@kenniscapital.com" className="btn-primary">
              Get in Touch
            </a>
            <a href="tel:+441234567890" className="btn-secondary">
              Schedule a Call
            </a>
          </div>

          <p className="text-sm text-gray-400 pt-4">
            Based in London | Available across Europe, US, and Asia-Pacific
          </p>
        </div>
      </div>
    </section>
  );
}
