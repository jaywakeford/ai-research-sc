'use client';

import React from 'react';
import ImageCard from '@/components/ImageCard';

const portfolioItems = [
  {
    title: "AI Research & Development",
    description: "Leading research initiatives in computer vision and GPT-4 integration",
    imagePath: "/images/ai_network.jpg",
    tags: ["AI", "Computer Vision", "GPT-4", "Research"]
  },
  {
    title: "Supply Chain Analytics",
    description: "End-to-end supply chain optimization and analytics solutions",
    imagePath: "/images/logistics.jpg",
    tags: ["Analytics", "Supply Chain", "Optimization"]
  },
  {
    title: "Business Intelligence",
    description: "Enterprise-wide BI implementation and analytics frameworks",
    imagePath: "/images/bi.jpg",
    tags: ["BI", "Data Analytics", "Visualization"]
  },
  {
    title: "Warehouse Operations",
    description: "Large-scale warehouse management and optimization systems",
    imagePath: "/images/warehouse.jpg",
    tags: ["Operations", "Management", "Optimization"]
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Portfolio</h1>
        <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          A showcase of projects and achievements in AI, analytics, and operational excellence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <ImageCard
                imagePath={item.imagePath}
                title={item.title}
                description={item.description}
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 