import React, { useEffect, useState } from 'react';
import { MicIcon, MicOffIcon } from 'lucide-react';
interface VoiceCommandsProps {
  onCommand: (command: string) => void;
  isListening: boolean;
  setIsListening: (isListening: boolean) => void;
}
export const VoiceCommands: React.FC<VoiceCommandsProps> = ({
  onCommand,
  isListening,
  setIsListening
}) => {
  const [transcript, setTranscript] = useState('');
  // Mock speech recognition functionality
  useEffect(() => {
    if (isListening) {
      // In a real implementation, this would use the Web Speech API
      const timer = setTimeout(() => {
        setTranscript("What's in my way?");
        onCommand("What's in my way?");
        setIsListening(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setTranscript('');
    }
  }, [isListening, onCommand, setIsListening]);
  const toggleListening = () => {
    setIsListening(!isListening);
  };
  return <div className="flex flex-col items-center">
      <button onClick={toggleListening} className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${isListening ? 'bg-red-500 animate-pulse' : 'bg-blue-600 hover:bg-blue-700'}`} aria-label={isListening ? 'Stop listening' : 'Start listening'}>
        {isListening ? <MicOffIcon size={32} className="text-white" /> : <MicIcon size={32} className="text-white" />}
      </button>
      <div className="mt-4 text-center">
        {isListening ? <p className="text-lg font-medium">Listening...</p> : <p className="text-lg">Tap to speak</p>}
        {transcript && <p className="mt-2 px-4 py-2 bg-gray-100 rounded-md">
            "{transcript}"
          </p>}
      </div>
    </div>;
};