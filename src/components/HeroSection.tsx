import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imagePath: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imagePath }) => {
  return (
    <section className="hero-section">
      <img
        src={imagePath}
        alt="Hero background"
        className="hero-image absolute inset-0 w-full h-full"
      />
      <div className="hero-content">
        <h1 className="text-5xl font-bold mb-6 gradient-text">
          {title}
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection; 