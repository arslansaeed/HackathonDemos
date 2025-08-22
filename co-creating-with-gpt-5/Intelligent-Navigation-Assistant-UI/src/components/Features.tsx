import React from 'react';
import { Eye, MapPin, VolumeX, Shield, Cpu, Battery } from 'lucide-react';
export function Features() {
  const features = [{
    icon: <Eye className="w-10 h-10 text-purple-600" />,
    title: 'Real-time Obstacle Detection',
    description: 'Uses your smartphone camera to identify potential hazards in real-time.'
  }, {
    icon: <MapPin className="w-10 h-10 text-purple-600" />,
    title: 'Intelligent Scene Analysis',
    description: 'Goes beyond simple detection to provide contextual understanding of your surroundings.'
  }, {
    icon: <VolumeX className="w-10 h-10 text-purple-600" />,
    title: 'Natural Language Audio Alerts',
    description: 'Delivers clear, easy-to-understand voice commands and descriptions.'
  }, {
    icon: <Cpu className="w-10 h-10 text-purple-600" />,
    title: 'Two-Tiered AI Architecture',
    description: 'Optimizes performance using lightweight scanning and powerful analysis only when needed.'
  }, {
    icon: <Battery className="w-10 h-10 text-purple-600" />,
    title: 'Energy Efficient',
    description: 'Designed to minimize battery drain while providing continuous assistance.'
  }, {
    icon: <Shield className="w-10 h-10 text-purple-600" />,
    title: 'Privacy Focused',
    description: 'All processing happens on your device, keeping your data private and secure.'
  }];
  return <section id="features" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-indigo-900 mb-4">
          Key Features
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our navigation assistant combines cutting-edge AI technology with
          accessibility features to provide reliable guidance for visually
          impaired individuals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>)}
      </div>
    </section>;
}