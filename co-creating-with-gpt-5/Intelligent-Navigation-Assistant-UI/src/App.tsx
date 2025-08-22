import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VoiceInput } from './components/VoiceInput';
import { CameraView } from './components/CameraView';
import { Features } from './components/Features';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
export function App() {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [voiceInput, setVoiceInput] = useState('');
  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
  };
  const handleSOSClick = () => {
    // In a real app, this would trigger an emergency call
    alert('Emergency services would be called (999)');
  };
  return <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-blue-50 to-purple-50">
      <Header onSOSClick={handleSOSClick} />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <VoiceInput voiceInput={voiceInput} setVoiceInput={setVoiceInput} toggleCamera={toggleCamera} isCameraActive={isCameraActive} />
          {isCameraActive && <CameraView voiceInput={voiceInput} />}
          <Features />
          <DownloadSection />
        </div>
      </main>
      <Footer />
    </div>;
}