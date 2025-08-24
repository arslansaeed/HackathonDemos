import React from 'react';
import { Github, Twitter, Mail, Heart } from 'lucide-react';
export function Footer() {
  return <footer className="bg-indigo-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-sm font-bold">VI</span>
            </div>
            SightGuide
          </h3>
          <p className="text-indigo-200 mb-4">
            Empowering visually impaired individuals through intelligent
            navigation assistance.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="GitHub" className="text-indigo-200 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-indigo-200 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Email" className="text-indigo-200 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                User Guide
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                API
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-indigo-800 mt-8 pt-8 text-center">
        <p className="text-indigo-200 flex items-center justify-center">
          Made with <Heart size={16} className="mx-1 text-red-400" /> for the
          Co-Creating with GPT-5 Hackathon
        </p>
        <p className="text-indigo-300 text-sm mt-2">
          © {new Date().getFullYear()} SightGuide. All rights reserved.
        </p>
      </div>
    </div>
  </footer>;
}