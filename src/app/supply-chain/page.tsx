'use client';

import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import AudioPlayer from '@/components/AudioPlayer';

const videos = [
  {
    title: 'Colleague to Colleague Deep Analytics',
    videoUrl: '/media/videos/colleague-to-colleague-deep-analytics.mp4',
    description: 'Advanced analytics platform facilitating peer-to-peer collaboration and deep insights sharing.',
    technologies: ['Analytics', 'Collaboration', 'Data Visualization'],
    metrics: [
      'Team Collaboration +35%',
      'Insights Sharing +40%',
      'Decision Making Speed +25%'
    ]
  },
  {
    title: 'Bottom-Up Task Management System',
    videoUrl: '/media/videos/bottomup-task-management-system.mp4',
    description: 'Innovative task management system empowering teams through data-driven decision making and autonomous workflows.',
    technologies: ['Task Analysis', 'Process Automation', 'Team Empowerment'],
    metrics: [
      'Team Efficiency +40%',
      'Task Completion Rate +35%',
      'Team Engagement +30%'
    ]
  },
  {
    title: 'Balanced Scorecard Analytics',
    videoUrl: '/media/videos/balanced-scorecard.mp4',
    description: 'Advanced performance metrics and KPI visualization system for supply chain optimization.',
    technologies: ['Power BI', 'DAX', 'SQL'],
    metrics: [
      'Performance Tracking +45%',
      'KPI Visibility +50%',
      'Decision Accuracy +40%'
    ]
  },
  {
    title: 'Last Mile Delivery Intelligence',
    videoUrl: '/media/videos/lmd-uat-sit-pbi.mp4',
    audioUrl: '/media/audio/lmd-sop-pod.mp3',
    description: 'Real-time delivery tracking and optimization platform with predictive analytics.',
    technologies: ['Power BI', 'Python', 'Machine Learning', 'GPS Integration'],
    metrics: [
      'Delivery Time -32%',
      'Route Optimization +28%',
      'Customer Satisfaction +25%'
    ]
  },
  {
    title: 'Opportunity Gaps Automation',
    videoUrl: '/media/videos/opportunity-gaps-automation.mp4',
    description: 'AI-driven system for identifying and analyzing supply chain optimization opportunities.',
    technologies: ['AI/ML', 'Python', 'Tableau', 'Big Data'],
    metrics: [
      'Cost Reduction 28%',
      'Process Efficiency +35%',
      'Resource Utilization +30%'
    ]
  },
  {
    title: 'Real-Time Analytics Dashboard',
    videoUrl: '/media/videos/reporting-insights-rapid-demo.mp4',
    description: 'Dynamic reporting system with real-time insights and predictive analytics.',
    technologies: ['Power BI', 'SQL', 'Real-time Analytics'],
    metrics: [
      'Reporting Efficiency +65%',
      'Data Accuracy +45%',
      'Decision Speed +40%'
    ]
  }
];

export default function SupplyChainPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            Supply Chain Analytics Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative implementations in supply chain optimization, 
            data analytics, and business intelligence solutions.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Power BI Analytics */}
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/20">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Power BI Analytics</h3>
            </div>
            <p className="text-gray-300">
              Data-driven insights and visualization for cost savings and operational improvements
            </p>
          </div>

          {/* Cost Optimization */}
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-500/20">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Cost Optimization</h3>
            </div>
            <p className="text-gray-300">
              Proven track record in implementing cost-saving initiatives at scale
            </p>
          </div>

          {/* Process Automation */}
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-500/20">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Process Automation</h3>
            </div>
            <p className="text-gray-300">
              Streamlining operations through strategic process automation and system integration
            </p>
          </div>

          {/* Supply Chain Optimization */}
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-500/20">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Supply Chain Optimization</h3>
            </div>
            <p className="text-gray-300">
              Expert in end-to-end supply chain optimization, specializing in cost reduction and efficiency improvements
            </p>
          </div>

          {/* Data Analytics */}
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/20">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Data Analytics</h3>
            </div>
            <p className="text-gray-300">
              Advanced skills in PowerBI, Python, and SQL for turning complex data into actionable insights
            </p>
          </div>

          {/* Process Improvement */}
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/20">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Process Improvement</h3>
            </div>
            <p className="text-gray-300">
              Proven track record in implementing lean methodologies and continuous improvement initiatives
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {videos.map((video, index) => (
            <div key={index} className="space-y-6">
              <VideoPlayer
                {...video}
              />
              {video.audioUrl && (
                <div className="glass-card p-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Technical Walkthrough & Implementation Details
                  </h4>
                  <AudioPlayer
                    src={video.audioUrl}
                    title={`${video.title} - Technical Walkthrough`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 glass-card rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Technical Expertise Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-indigo-900/30 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">Data Analytics</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Advanced Power BI Development</li>
                <li>• Real-time Analytics Integration</li>
                <li>• Custom DAX Solutions</li>
              </ul>
            </div>
            <div className="p-4 bg-indigo-900/30 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">Supply Chain Optimization</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Predictive Analytics Models</li>
                <li>• Last Mile Delivery Solutions</li>
                <li>• Inventory Management Systems</li>
              </ul>
            </div>
            <div className="p-4 bg-indigo-900/30 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">Technical Integration</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Enterprise System Integration</li>
                <li>• API Development</li>
                <li>• Automated Reporting Systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 glass-card rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Bottom-Up Task Management</h2>
          <p className="text-gray-300 mb-6">
            Implementing an innovative bottom-up approach to task management in supply chain operations,
            empowering teams to identify and prioritize tasks based on ground-level insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-indigo-900/30 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-indigo-300">Task Prioritization Framework</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Team-driven task identification and assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Real-time priority adjustment based on operational feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Collaborative decision-making process</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-indigo-900/30 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-indigo-300">Implementation Results</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>40% improvement in task completion efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>35% reduction in project bottlenecks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>25% increase in team engagement</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-indigo-900/30 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">Task Analysis</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Data-driven task assessment</li>
                <li>• Performance metrics tracking</li>
                <li>• Resource allocation optimization</li>
              </ul>
            </div>
            <div className="p-4 bg-indigo-900/30 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">Team Empowerment</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Autonomous decision-making</li>
                <li>• Skill development tracking</li>
                <li>• Cross-functional collaboration</li>
              </ul>
            </div>
            <div className="p-4 bg-indigo-900/30 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">Process Integration</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Workflow automation</li>
                <li>• Real-time progress tracking</li>
                <li>• Continuous improvement cycles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 