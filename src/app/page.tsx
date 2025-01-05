'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import ImageCard from '@/components/ImageCard';
import MetricsSection from '@/components/MetricsSection';
import AudioPlayer from '@/components/AudioPlayer';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <h1 className="text-5xl font-bold mb-6 gradient-text">
                AI Innovation & Operational Excellence
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Bridging advanced artificial intelligence with enterprise operations through innovative research and practical implementation. Specializing in computer vision, GPT-4 integration, and large-scale operational transformation.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/logistics-network.jpg"
                  alt="Logistics Network Visualization"
                  fill
                  priority
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/selfie2.jpg"
                  alt="Profile Picture"
                  fill
                  priority
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="glass-card p-8">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Welcome</h2>
                <div className="prose prose-invert">
                  <p className="text-lg mb-4">
                    With a proven track record of integrating cutting-edge technologies into large-scale operations, 
                    I bring a unique blend of AI expertise and operational management experience to drive significant 
                    efficiencies and tangible business impact.
                  </p>
                  <p className="text-lg mb-4">
                    From leading AI research initiatives in computer vision and GPT-4 integration to deploying Cloud POS 
                    systems across 800+ Starbucks locations, my work demonstrates the practical application of innovative 
                    solutions at scale.
                  </p>
                  <p className="text-lg">
                    I thrive in collaborative environments where I can bridge cross-functional teams, ensuring that 
                    technological innovations align with strategic business objectives while delivering measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-8">
        <div className="container mx-auto px-4">
          <AudioPlayer
            src="/media/audio/jw-overview.mp3"
            title="Overview Audio"
          />
        </div>
      </section>

      <MetricsSection />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Core Expertise</h2>
          <div className="image-grid">
            <ImageCard
              imagePath="/images/physics-7249773_1280.jpg"
              title="Advanced AI Systems"
              description="Computer vision with GPT-4 integration, distributed NLP frameworks, and innovative machine learning solutions"
            />
            <ImageCard
              imagePath="/images/warehouse.jpg"
              title="Enterprise Operations"
              description="Large-scale deployment of Cloud POS systems, operational transformation, and process optimization"
            />
            <ImageCard
              imagePath="/images/bi.jpg"
              title="Data Analytics & Mapping"
              description="QGIS-based mapping solutions, enterprise-wide analytics initiatives, and business intelligence"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-opacity-30 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image 
                  src="/images/logistics.jpg" 
                  alt="Supply Chain Operations"
                  fill
                  priority
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 gradient-text">Technical Leadership</h2>
              <div className="grid gap-6">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-4">AI & Innovation</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-tag">Computer Vision</span>
                    <span className="tech-tag">GPT-4</span>
                    <span className="tech-tag">NLP</span>
                    <span className="tech-tag">Machine Learning</span>
                  </div>
                </div>
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-4">Enterprise Systems</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-tag">Cloud POS</span>
                    <span className="tech-tag">QGIS</span>
                    <span className="tech-tag">Process Automation</span>
                    <span className="tech-tag">System Integration</span>
                  </div>
                </div>
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-4">Analytics & Data</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-tag">Business Intelligence</span>
                    <span className="tech-tag">Data Modeling</span>
                    <span className="tech-tag">Predictive Analytics</span>
                    <span className="tech-tag">KPI Tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 