import React from 'react';
import { Download, Smartphone } from 'lucide-react';
export function DownloadSection() {
  return <section id="download" className="py-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl my-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-indigo-900 mb-4">
          Download Our App
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Get started with our free navigation assistant app, designed to help
          visually impaired individuals navigate their surroundings with
          confidence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <a href="#" className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors" aria-label="Download on the App Store">
            <Download size={20} />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </a>
          <a href="#" className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors" aria-label="Get it on Google Play">
            <Download size={20} />
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="bg-white p-4 rounded-2xl shadow-lg inline-block">
            <div className="flex items-center space-x-2 mb-2">
              <Smartphone className="text-indigo-600" size={20} />
              <span className="text-indigo-900 font-semibold">
                Scan QR Code
              </span>
            </div>
            <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              {/* Placeholder for QR code */}
              <div className="w-36 h-36 bg-gray-800 relative">
                <div className="absolute inset-4 border-4 border-white"></div>
                <div className="absolute inset-8 bg-white"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-xs">
                  QR Code
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}