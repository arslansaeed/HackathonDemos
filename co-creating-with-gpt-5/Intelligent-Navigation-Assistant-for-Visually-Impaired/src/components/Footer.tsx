import React from 'react';
export const Footer: React.FC = () => {
  return <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <img src="https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?q=80&w=80&auto=format&fit=crop" alt="VisionGuide Logo" className="w-8 h-8 object-cover rounded-full" />
              </div>
              <h2 className="text-xl font-bold">VisionGuide</h2>
            </div>
            <p className="text-blue-300">
              Empowering visually impaired individuals through intelligent
              navigation assistance
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-blue-300 transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} VisionGuide. All rights reserved.</p>
          <p className="mt-1">Born at Google - The Gemma 3n Impact Challenge</p>
        </div>
      </div>
    </footer>;
};