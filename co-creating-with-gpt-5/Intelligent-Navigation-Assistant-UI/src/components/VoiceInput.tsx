import React, { useEffect, useState } from 'react';
import { Mic, MicOff, Camera, RefreshCw } from 'lucide-react';
interface VoiceInputProps {
  voiceInput: string;
  setVoiceInput: (input: string) => void;
  toggleCamera: () => void;
  isCameraActive: boolean;
}
export function VoiceInput({
  voiceInput,
  setVoiceInput,
  toggleCamera,
  isCameraActive
}: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  // Simulate voice recognition
  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      setIsListening(true);
      // Simulate receiving voice input
      setTimeout(() => {
        setVoiceInput("What's in front of me?");
        setIsListening(false);
        setIsProcessing(true);
        // Simulate processing
        setTimeout(() => {
          setIsProcessing(false);
          if (!isCameraActive) {
            toggleCamera(); // Automatically activate camera after voice input
          }
        }, 2000);
      }, 2000);
    }
  };
  return <section className="my-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-900 mb-4">
        Voice Assistant
      </h2>
      <div className="relative bg-white rounded-lg shadow-inner p-6 mb-6">
        <div className="min-h-24 text-lg text-gray-700">
          {voiceInput ? voiceInput : 'Tap the microphone and ask a question...'}
        </div>
        {isProcessing && <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 rounded-lg flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <RefreshCw className="animate-spin text-indigo-600" />
              <span className="text-indigo-900 font-medium">Processing...</span>
            </div>
          </div>}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button onClick={toggleListening} className={`${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white font-bold py-4 px-6 rounded-full flex items-center justify-center space-x-3 transition-colors w-full sm:w-auto`} aria-label={isListening ? 'Stop listening' : 'Start listening'}>
          {isListening ? <>
              <MicOff size={24} />
              <span>Stop Listening</span>
            </> : <>
              <Mic size={24} />
              <span>Start Listening</span>
            </>}
        </button>
        <button onClick={toggleCamera} className={`${isCameraActive ? 'bg-purple-700 hover:bg-purple-800' : 'bg-purple-500 hover:bg-purple-600'} text-white font-bold py-4 px-6 rounded-full flex items-center justify-center space-x-3 transition-colors w-full sm:w-auto`} aria-label={isCameraActive ? 'Deactivate camera' : 'Activate camera'}>
          <Camera size={24} />
          <span>
            {isCameraActive ? 'Deactivate Camera' : 'Activate Camera'}
          </span>
        </button>
      </div>
    </section>;
}