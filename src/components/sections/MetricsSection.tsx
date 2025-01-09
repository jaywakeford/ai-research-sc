import React from 'react';

interface Metric {
  value: string;
  label: string;
  description: string;
}

const metrics: Metric[] = [
  {
    value: "500+",
    label: "Employee Operations",
    description: "Led digital transformation of large-scale operations"
  },
  {
    value: "3m",
    label: "Delivery Accuracy",
    description: "Improved from 4km variance using QGIS solutions"
  },
  {
    value: "3",
    label: "AI Systems",
    description: "Developed key systems for market analysis"
  },
  {
    value: "ML/AI",
    label: "Integration",
    description: "Advanced pattern recognition & predictive modeling"
  }
];

const MetricsSection: React.FC = () => {
  return (
    <section className="py-16 bg-opacity-30 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 gradient-text text-center">
          Professional Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="metric-badge mb-4 inline-block">
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-text-secondary">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection; 