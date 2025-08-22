import React, { useState } from 'react';
import { AccessibilitySettings } from '../components/AccessibilitySettings';
import { ChevronLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    audioFeedback: true,
    hapticFeedback: true,
    highContrast: false,
    slowFrameRate: false
  });
  const handleSettingChange = (setting: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
    // In a real app, this would save to localStorage or a backend
    console.log(`Setting ${setting} changed to ${value}`);
  };
  return <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ChevronLeftIcon size={20} />
          <span>Back to Dashboard</span>
        </Link>
        <h1 className="text-3xl font-bold mt-4">Settings</h1>
        <p className="text-gray-600">Customize your navigation experience</p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <AccessibilitySettings settings={settings} onSettingChange={handleSettingChange} />
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold">Voice Settings</h2>
            <p className="text-gray-600">Customize voice feedback</p>
          </div>
          <div className="p-4">
            <label className="block mb-2 font-medium">Voice Speed</label>
            <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>Slower</span>
              <span>Normal</span>
              <span>Faster</span>
            </div>
            <label className="block mt-6 mb-2 font-medium">Voice Volume</label>
            <input type="range" min="0" max="1" step="0.1" defaultValue="0.8" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>Quiet</span>
              <span>Medium</span>
              <span>Loud</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold">Detection Settings</h2>
            <p className="text-gray-600">Customize obstacle detection</p>
          </div>
          <div className="p-4">
            <label className="block mb-2 font-medium">Detection Distance</label>
            <input type="range" min="1" max="5" step="0.5" defaultValue="3" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>Near (1m)</span>
              <span>Medium (3m)</span>
              <span>Far (5m)</span>
            </div>
            <div className="mt-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" defaultChecked />
                <span>Detect moving objects</span>
              </label>
            </div>
            <div className="mt-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" defaultChecked />
                <span>Detect stationary obstacles</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium" aria-label="Save settings">
            Save Settings
          </button>
        </div>
      </div>
    </div>;
};