'use client';

import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import AudioPlayer from '@/components/AudioPlayer';

const videos = [
  {
    title: 'Colleague to Colleague Deep Analytics',
    videoUrl: '/videos/colleague_to_colleague_deep_analytics.mp4',
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
    videoUrl: '/videos/bottomup_task_management_system.mp4',
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
    videoUrl: '/videos/balanced_scorecard.mp4',
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
    videoUrl: '/videos/lmd_uat_sit_pbi.mp4',
    audioUrl: '/audio/lmd_sop_pod.mp3',
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
    videoUrl: '/videos/opportunity_gaps_automation.mp4',
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
    videoUrl: '/videos/reporting__insights_rapid_demo.mp4',
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