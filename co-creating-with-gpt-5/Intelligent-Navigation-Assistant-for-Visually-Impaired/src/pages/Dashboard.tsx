import React, { useEffect, useState } from 'react';
import { VoiceCommands } from '../components/VoiceCommands';
import { CameraFeed } from '../components/CameraFeed';
import { AlertTriangleIcon, InfoIcon, ArrowRightIcon, MapIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Dashboard: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [responseText, setResponseText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // Mock function to handle voice commands
  const handleCommand = (command: string) => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      if (command.toLowerCase().includes('way') || command.toLowerCase().includes('obstacle')) {
        setResponseText('There is a chair about 2 meters ahead of you. Consider moving slightly to your right to avoid it.');
      } else if (command.toLowerCase().includes('road')) {
        setResponseText('You are currently on the sidewalk, approximately 3 meters from the road.');
      } else {
        setResponseText("I'm not sure how to answer that. Try asking about obstacles or your surroundings.");
      }
      setIsLoading(false);
      // Text-to-speech would happen here in a real implementation
    }, 1500);
  };
  // Auto-activate camera when page loads
  useEffect(() => {
    setIsCameraActive(true);
  }, []);
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-6">
        <div className="relative mb-10 py-12 px-6 rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-800 text-white shadow-xl">
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1626958390967-8a558cb53b79?q=80&w=1200&auto=format&fit=crop" alt="Navigation Background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 drop-shadow-md">
              VisionGuide
            </h1>
            <p className="text-center text-blue-100 text-xl">
              Your intelligent navigation assistant
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {/* Camera section */}
          <section className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl p-6 border border-blue-100 transform transition-all hover:scale-[1.01]">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">
              Camera View
            </h2>
            <CameraFeed isActive={isCameraActive} />
            <div className="mt-6 flex justify-center">
              <button onClick={() => setIsCameraActive(!isCameraActive)} className={`px-6 py-3 rounded-lg text-white font-medium shadow-lg transform transition-all hover:translate-y-[-2px] ${isCameraActive ? 'bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800' : 'bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800'}`} aria-label={isCameraActive ? 'Deactivate camera' : 'Activate camera'}>
                {isCameraActive ? 'Deactivate Camera' : 'Activate Camera'}
              </button>
            </div>
          </section>
          {/* Voice command section */}
          <section className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-xl p-8 border border-purple-100 transform transition-all hover:scale-[1.01]">
            <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
              Ask for Assistance
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <VoiceCommands onCommand={handleCommand} isListening={isListening} setIsListening={setIsListening} />
              </div>
            </div>
            {isLoading && <div className="mt-6 text-center">
                <div className="inline-block w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-3 text-purple-800 font-medium">
                  Analyzing surroundings...
                </p>
              </div>}
            {responseText && !isLoading && <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-xl shadow-md">
                <div className="flex items-start">
                  <InfoIcon className="text-blue-600 mr-4 mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-blue-900">{responseText}</p>
                </div>
              </div>}
            <div className="mt-8">
              <p className="text-purple-800 text-center font-medium mb-3">
                Example questions to ask:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button onClick={() => {
                setIsListening(true);
                setTimeout(() => {
                  setIsListening(false);
                  handleCommand("What's in my way?");
                }, 500);
              }} className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 rounded-lg text-left shadow-md border border-indigo-200">
                  "What's in my way?"
                </button>
                <button onClick={() => {
                setIsListening(true);
                setTimeout(() => {
                  setIsListening(false);
                  handleCommand('Am I on the road?');
                }, 500);
              }} className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 rounded-lg text-left shadow-md border border-indigo-200">
                  "Am I on the road?"
                </button>
              </div>
            </div>
          </section>
          {/* Quick access section */}
          <section className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-xl p-6 border border-green-100 transform transition-all hover:scale-[1.01]">
            <h2 className="text-2xl font-bold mb-6 text-green-800">
              Quick Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/settings" className="flex items-center p-5 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all shadow-md border border-blue-200 transform hover:translate-y-[-2px]">
                <div className="bg-blue-200 p-4 rounded-full mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-blue-900">
                    Accessibility Settings
                  </h3>
                  <p className="text-sm text-blue-700">
                    Customize your experience
                  </p>
                </div>
                <ArrowRightIcon className="ml-auto text-blue-600" />
              </Link>
              <Link to="/journey-planner" className="flex items-center p-5 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl transition-all shadow-md border border-green-200 transform hover:translate-y-[-2px]">
                <div className="bg-green-200 p-4 rounded-full mr-4">
                  <MapIcon size={24} className="text-green-700" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-green-900">
                    Journey Planner
                  </h3>
                  <p className="text-sm text-green-700">
                    Plan your route in advance
                  </p>
                </div>
                <ArrowRightIcon className="ml-auto text-green-600" />
              </Link>
            </div>
          </section>
          {/* Safety alert */}
          <div className="bg-gradient-to-r from-yellow-100 to-amber-50 border-l-4 border-yellow-400 p-5 rounded-lg shadow-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangleIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="ml-4">
                <p className="text-amber-800">
                  <strong>Safety Notice:</strong> This application is an
                  assistive tool and should not replace your primary navigation
                  aids like a white cane or guide dog.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};