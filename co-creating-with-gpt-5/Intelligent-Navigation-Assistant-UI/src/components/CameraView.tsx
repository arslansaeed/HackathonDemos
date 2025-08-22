import React, { useEffect, useState } from 'react';
import { Volume2 } from 'lucide-react';
interface CameraViewProps {
  voiceInput: string;
}
export function CameraView({
  voiceInput
}: CameraViewProps) {
  const [response, setResponse] = useState('');
  // Simulate AI response based on camera + voice input
  useEffect(() => {
    if (voiceInput) {
      setTimeout(() => {
        setResponse('There is a chair about 2 meters in front of you. You can safely walk straight for 1 meter, then turn slightly to your right to avoid it.');
      }, 3000);
    }
  }, [voiceInput]);
  return <section className="mb-12 bg-gray-900 rounded-xl shadow-lg overflow-hidden">
      <div className="relative">
        {/* Simulated camera view */}
        <div className="w-full h-64 md:h-96 bg-black flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Simulated camera view showing a room with furniture" className="w-full h-full object-cover opacity-80" />
          <div className="absolute top-4 right-4 bg-red-600 w-4 h-4 rounded-full animate-pulse"></div>
        </div>
        {/* AI response overlay */}
        {response && <div className="bg-indigo-900 bg-opacity-90 p-4 text-white">
            <div className="flex items-start space-x-3">
              <Volume2 className="text-purple-300 mt-1 flex-shrink-0" />
              <p className="text-lg">{response}</p>
            </div>
          </div>}
      </div>
    </section>;
}