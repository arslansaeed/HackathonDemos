import React from 'react';
import { ToggleLeft, ToggleRight, Volume2, Vibrate } from 'lucide-react';
interface SettingItemProps {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
}
const SettingItem: React.FC<SettingItemProps> = ({
  title,
  description,
  enabled,
  onToggle,
  icon
}) => {
  return <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center">
        <div className="mr-4 text-blue-600">{icon}</div>
        <div>
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <button onClick={onToggle} className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" aria-pressed={enabled} aria-label={`Toggle ${title}`}>
        {enabled ? <ToggleRight size={36} className="text-blue-600" /> : <ToggleLeft size={36} className="text-gray-400" />}
      </button>
    </div>;
};
interface AccessibilitySettingsProps {
  settings: {
    audioFeedback: boolean;
    hapticFeedback: boolean;
    highContrast: boolean;
    slowFrameRate: boolean;
  };
  onSettingChange: (setting: string, value: boolean) => void;
}
export const AccessibilitySettings: React.FC<AccessibilitySettingsProps> = ({
  settings,
  onSettingChange
}) => {
  return <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold">Accessibility Settings</h2>
        <p className="text-gray-600">Customize your experience</p>
      </div>
      <SettingItem title="Audio Feedback" description="Enable voice announcements for detected obstacles" enabled={settings.audioFeedback} onToggle={() => onSettingChange('audioFeedback', !settings.audioFeedback)} icon={<Volume2 size={24} />} />
      <SettingItem title="Haptic Feedback" description="Enable vibration alerts for detected obstacles" enabled={settings.hapticFeedback} onToggle={() => onSettingChange('hapticFeedback', !settings.hapticFeedback)} icon={<Vibrate size={24} />} />
      <SettingItem title="High Contrast Mode" description="Enhance visual elements with higher contrast" enabled={settings.highContrast} onToggle={() => onSettingChange('highContrast', !settings.highContrast)} icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z"></path>
            <path d="M12 12L2 12"></path>
          </svg>} />
      <SettingItem title="Slower Frame Rate" description="Reduce processing speed to save battery" enabled={settings.slowFrameRate} onToggle={() => onSettingChange('slowFrameRate', !settings.slowFrameRate)} icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>} />
    </div>;
};