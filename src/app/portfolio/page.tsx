'use client';

import React from 'react';
import { ImageCard } from '@/components/core';

const portfolioItems = [
  {
    title: "AI Research & Development",
    description: "Leading research initiatives in computer vision and GPT-4 integration",
    imagePath: "/images/ai_network.jpg",
    tags: ["AI", "Computer Vision", "GPT-4", "Research"],
    size: "large"
  },
  {
    title: "Supply Chain Analytics",
    description: "End-to-end supply chain optimization and analytics solutions",
    imagePath: "/images/logistics.jpg",
    tags: ["Analytics", "Supply Chain", "Optimization"],
    size: "medium"
  },
  {
    title: "Business Intelligence",
    description: "Enterprise-wide BI implementation and analytics frameworks",
    imagePath: "/images/bi.jpg",
    tags: ["BI", "Data Analytics", "Visualization"],
    size: "medium"
  },
  {
    title: "Warehouse Operations",
    description: "Large-scale warehouse management and optimization systems",
    imagePath: "/images/warehouse.jpg",
    tags: ["Operations", "Management", "Optimization"],
    size: "large"
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Portfolio</h1>
        <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          A showcase of projects and achievements in AI, analytics, and operational excellence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className={`glass-card overflow-hidden transition-transform duration-300 hover:scale-[1.02] ${
                item.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'
              } ${index % 2 === 0 ? 'md:row-span-2' : 'md:row-span-1'}`}
            >
              <div className="relative h-full group">
                <ImageCard
                  imagePath={item.imagePath}
                  title={item.title}
                  description={item.description}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm
                                 backdrop-blur-sm transition-colors duration-300 hover:bg-indigo-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 