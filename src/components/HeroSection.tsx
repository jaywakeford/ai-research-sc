import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imagePath: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imagePath }) => {
  return (
    <section className="hero-section">
      <Image
        src={imagePath}
        alt="Hero background"
        fill
        className="hero-image"
        priority
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