import React from 'react';
import '../styles/Features.css';

const features = [
  {
    title: 'Track Your Cycle',
    description: 'Log your periods, symptoms, and mood to gain a better understanding of your cycle patterns.'
  },
  {
    title: 'Get AI Powered Insights',
    description: 'Receive smart predictions for your next period, ovulation, and fertility window based on advanced AI analysis.'
  },
  {
    title: 'Monitor Your Symptoms & Mood',
    description: 'Keep track of physical and emotional symptoms, helping you identify trends and potential health concerns.'
  },
  {
    title: 'Personalized Health Tips',
    description: 'Get expert-backed advice tailored to your cycle, lifestyle, and wellness needs.'
  }
];

const Features = () => {
  return (
    <section className="features section">
      <div className="container">
        <h2>What Can You Do with Cycle Bloom?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;