'use client';

import React from 'react';
import PdfViewer from '@/components/PdfViewer';
import AudioPlayer from '@/components/AudioPlayer';
import VideoPlayer from '@/components/VideoPlayer';

const researchPapers = [
  {
    id: 'powerbi',
    title: 'Power BI Analytics Development',
    description: 'Advanced analytics implementation for financial trading systems using Power BI',
    pdfUrl: '/pdfs/powerbi-analytics-development-a.pdf',
    audioUrl: '/audio/power-bi-analytics-for-at-the-money-trading.mp3',
    videoUrl: '/videos/bi-trading-dashboard.mp4',
    tags: ['Power BI', 'Analytics', 'Trading']
  },
  {
    id: 'agents',
    title: 'AI Agent Systems Research',
    description: 'Research on AI agent systems for finance and macroeconomic analysis',
    pdfUrl: '/pdfs/agents-research-b.pdf',
    audioUrl: '/audio/ai-agent-systems-for-finance-and-macroeconomics.mp3',
    tags: ['AI', 'Finance', 'Agents']
  },
  {
    id: 'interpreter',
    title: 'Open Interpreter Integration',
    description: 'Automating workflows through advanced interpreter systems',
    pdfUrl: '/pdfs/open-interpreter-c.pdf',
    audioUrl: '/audio/automating-workflows-with-open-interpreter.mp3',
    tags: ['Automation', 'Workflow', 'Integration']
  },
  {
    id: 'ml',
    title: 'Independent Machine Learning Research',
    description: 'Machine learning applications in financial trading systems',
    pdfUrl: '/pdfs/independent-ml-learning-model-d.pdf',
    audioUrl: '/audio/independent-machine-learning-research-in-financial-trading.mp3',
    tags: ['Machine Learning', 'Trading', 'Research']
  }
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Research Papers</h1>
        <p className="text-lg text-text-secondary mb-12 text-center max-w-3xl mx-auto">
          A collection of research papers exploring AI innovation, machine learning applications, 
          and advanced analytics in financial systems. Each paper includes an audio summary.
        </p>
        
        <div className="grid gap-24">
          {researchPapers.map((paper) => (
            <div key={paper.id} className="glass-card p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-3 gradient-text">{paper.title}</h2>
                    <p className="text-text-secondary mb-4">{paper.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag) => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="h-[600px] mb-6">
                    <PdfViewer pdfUrl={paper.pdfUrl} />
                  </div>
                  {paper.id === 'powerbi' && (
                    <div className="mt-12 mb-12">
                      <div className="glass-card p-6">
                        <h3 className="text-xl font-semibold mb-6">Implementation Demo</h3>
                        <VideoPlayer 
                          videoUrl="/videos/bi_trading_dashboard.mp4"
                          title="Power BI Analytics Implementation"
                          description="Demonstration of advanced analytics implementation for financial trading systems using Power BI"
                          technologies={['Power BI', 'DAX', 'M Query', 'SQL']}
                          metrics={['Real-time Processing', 'Trading Volume', 'Performance Analytics']}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full lg:w-1/3">
                  <div className="sticky top-8">
                    <h3 className="text-xl font-semibold mb-4">Audio Summary</h3>
                    <div className="glass-card p-4">
                      <AudioPlayer src={paper.audioUrl} title="Research Summary" />
                    </div>
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mb-4">Key Points</h3>
                      <ul className="space-y-3 text-text-secondary">
                        <li>• Advanced implementation techniques</li>
                        <li>• Real-world applications</li>
                        <li>• Performance metrics and results</li>
                        <li>• Future research directions</li>
                      </ul>
                    </div>
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