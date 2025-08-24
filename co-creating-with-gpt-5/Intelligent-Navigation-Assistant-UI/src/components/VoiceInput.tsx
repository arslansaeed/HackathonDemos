"use client";

import React, { useEffect, useRef, useState } from "react";
import { Mic, MicOff, Camera, RefreshCw } from "lucide-react";

// CameraFeed component (you can extract this to a separate file)
interface CameraFeedProps {
  isActive: boolean;
}

const CameraFeed: React.FC<CameraFeedProps> = ({ isActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (isActive) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [isActive]);

  const startCamera = async () => {
    try {
      setError('');
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user'
        }
      });

      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play().catch((err) => {
          console.error('Error playing video:', err);
          setError('Failed to play camera stream');
        });
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      if (err instanceof Error) {
        switch (err.name) {
          case 'NotAllowedError':
            setError('Camera permission denied. Please allow camera access.');
            break;
          case 'NotFoundError':
            setError('No camera found on this device.');
            break;
          case 'NotReadableError':
            setError('Camera is already in use by another application.');
            break;
          default:
            setError(`Camera error: ${err.message}`);
        }
      } else {
        setError('Unknown camera error occurred.');
      }
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  if (!isActive) {
    return (
      <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-gray-400 text-lg">Camera is inactive</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-64 bg-red-100 rounded-lg flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-red-600 text-4xl mb-2">⚠️</div>
          <p className="text-red-700 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-auto object-cover"
        style={{
          maxHeight: "70vh",
          minHeight: "300px"
        }}
      />
      {!stream && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Starting camera...</p>
          </div>
        </div>
      )}
    </div>
  );
};

interface VoiceInputProps {
  voiceInput: string;
  setVoiceInput: (input: string) => void;
}

export function VoiceInput({ voiceInput, setVoiceInput }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // -----------------------------
  // Camera toggle (using working approach from Dashboard)
  // -----------------------------
  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
  };

  // -----------------------------
  // Voice simulation
  // -----------------------------
  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      setIsListening(true);
      setTimeout(() => {
        setVoiceInput("Chair"); // Simulate detected obstacle
        setIsListening(false);
        setIsProcessing(true);
        setTimeout(() => {
          setIsProcessing(false);
          if (!isCameraActive) toggleCamera(); // auto-activate camera
        }, 2000);
      }, 2000);
    }
  };

  // -----------------------------
  // Auto-activate camera when component mounts (like Dashboard)
  // -----------------------------
  useEffect(() => {
    setIsCameraActive(false);
  }, []);

  return (
    <section className="my-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-900 mb-4">Voice Assistant</h2>

      {/* Voice Output Box */}
      <div className="relative bg-white rounded-lg shadow-inner p-6 mb-6">
        <div className="min-h-24 text-lg text-gray-700">
          {voiceInput ? `Detected Obstacle: ${voiceInput}` : "Tap the microphone and ask a question..."}
        </div>
        {isProcessing && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 rounded-lg flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <RefreshCw className="animate-spin text-indigo-600" />
              <span className="text-indigo-900 font-medium">Processing...</span>
            </div>
          </div>
        )}
      </div>

      {/* Error Display */}
      {/* Removed error display to match working Dashboard approach */}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
        <button
          onClick={toggleListening}
          className={`${isListening ? "bg-red-500 hover:bg-red-600" : "bg-indigo-600 hover:bg-indigo-700"
            } text-white font-bold py-4 px-6 rounded-full flex items-center justify-center space-x-3 transition-colors w-full sm:w-auto`}
          aria-label={isListening ? "Stop listening" : "Start listening"}
        >
          {isListening ? (
            <>
              <MicOff size={24} />
              <span>Stop Listening</span>
            </>
          ) : (
            <>
              <Mic size={24} />
              <span>Start Listening</span>
            </>
          )}
        </button>

        <button
          onClick={toggleCamera}
          className={`${isCameraActive ? "bg-purple-700 hover:bg-purple-800" : "bg-purple-500 hover:bg-purple-600"
            } text-white font-bold py-4 px-6 rounded-full flex items-center justify-center space-x-3 transition-colors w-full sm:w-auto`}
          aria-label={isCameraActive ? "Deactivate camera" : "Activate camera"}
        >
          <Camera size={24} />
          <span>{isCameraActive ? "Deactivate Camera" : "Activate Camera"}</span>
        </button>
      </div>

      {/* Camera Feed Component (matching Dashboard pattern) */}
      {isCameraActive && (
        <div className="relative w-full max-w-lg mx-auto rounded-lg overflow-hidden bg-black">
          <CameraFeed isActive={isCameraActive} />
          {voiceInput && (
            <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white p-3 text-center">
              <p className="font-bold">Obstacle Detected: {voiceInput}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}