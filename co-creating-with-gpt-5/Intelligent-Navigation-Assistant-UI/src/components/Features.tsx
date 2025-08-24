import React from 'react';
import { Eye, MapPin, VolumeX, Shield, Cpu, Battery, FileText, BarChart3, AlertTriangle, Video, Camera, Server, VideoIcon, Scan, Smartphone } from 'lucide-react';
export function Features() {
  const features = [{
    icon: <Smartphone className="w-10 h-10 text-purple-600" />,
    title: 'Real-time Obstacle Detection',
    description: 'Uses your smartphone camera to identify potential hazards in real-time.'
  }, {
    icon: <Eye className="w-10 h-10 text-purple-600" />,
    title: 'Fall Detection & Alert Management',
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Real-Time Fall Detection.</li>
        <li>Auto-alert emergency contact via call or email on fall.</li>
      </ul>
    )
  }, {
    icon: <Cpu className="w-10 h-10 text-purple-600" />,
    title: 'Agentic Workflow',
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Seamless Autonomous Operation from raw video to insights.</li>
        <li>Multi-stage AI agents handle video preparation, annotation, and analysis.</li>
      </ul>
    )
  }, {
    icon: <Video className="w-10 h-10 text-purple-600" />,
    title: 'Live Monitoring Dashboard',
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Real-time video stream from connected cameras.</li>
        <li>Timeline of events with playback.</li>
      </ul>
    )
  }, {
    icon: <BarChart3 className="w-10 h-10 text-purple-600" />,
    title: 'Intelligent Analysis Reports',
    description: 'Comprehensive JSON reports with precise timestamp, frame analysis, and confidence metrics for each incident.'
  }, {
    icon: <Shield className="w-10 h-10 text-purple-600" />,
    title: 'CCTV Integration',
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>AI-Powered Event & Accident Detection.</li>
        <li>Transforms standard CCTV cameras into a proactive, intelligent monitoring system.</li>
      </ul>
    )
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