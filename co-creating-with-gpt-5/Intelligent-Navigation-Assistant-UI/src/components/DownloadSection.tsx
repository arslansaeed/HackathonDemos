import React from 'react';
import { Download, Smartphone } from 'lucide-react';

export function DownloadSection() {
  return (
    <section
      id="download"
      className="py-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl my-12"
    >
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
          <a
            href="#"
            className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors"
            aria-label="Download on the App Store"
          >
            <Download size={20} />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </a>
          <a
            href="#"
            className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors"
            aria-label="Get it on Google Play"
          >
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
            <div
              className="w-48 h-48 bg-white rounded-lg flex items-center justify-center"
              aria-label="QR code to download the navigation assistant app"
            >
              <div
                className="w-36 h-36 bg-white border-4 border-gray-800 relative"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
                    linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black)
                  `,
                  backgroundSize: '8px 8px',
                  backgroundPosition: '0 0, 4px 4px',
                }}
              >
                <div className="absolute top-2 left-2 w-8 h-8 border-2 border-gray-800"></div>
                <div className="absolute top-2 right-2 w-8 h-8 border-2 border-gray-800"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-2 border-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}