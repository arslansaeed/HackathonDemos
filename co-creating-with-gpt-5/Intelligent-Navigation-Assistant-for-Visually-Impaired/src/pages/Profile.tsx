import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, UserIcon, ClockIcon, MapIcon, SettingsIcon } from 'lucide-react';
export const Profile: React.FC = () => {
  return <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ChevronLeftIcon size={20} />
          <span>Back to Dashboard</span>
        </Link>
        <h1 className="text-3xl font-bold mt-4">My Profile</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 text-center">
              <div className="inline-block p-3 rounded-full bg-blue-100 mb-4">
                <UserIcon size={36} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
              <p className="mt-2 text-sm text-gray-500">
                Member since January 2023
              </p>
              <button className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                Edit Profile
              </button>
            </div>
            <div className="border-t border-gray-200">
              <Link to="/settings" className="flex items-center p-4 hover:bg-gray-50">
                <SettingsIcon size={20} className="text-gray-500 mr-3" />
                <span>Accessibility Settings</span>
              </Link>
              <button className="flex items-center p-4 hover:bg-gray-50 w-full text-left text-red-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md mb-6">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold">Recent Journeys</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <MapIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Home to Coffee Shop</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <ClockIcon size={16} className="mr-1" />
                      <span>Today, 9:30 AM</span>
                    </div>
                  </div>
                  <button className="ml-auto text-blue-600 hover:text-blue-800">
                    Repeat
                  </button>
                </div>
              </div>
              <div className="p-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <MapIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Library to Park</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <ClockIcon size={16} className="mr-1" />
                      <span>Yesterday, 2:15 PM</span>
                    </div>
                  </div>
                  <button className="ml-auto text-blue-600 hover:text-blue-800">
                    Repeat
                  </button>
                </div>
              </div>
              <div className="p-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <MapIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Train Station to Office</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <ClockIcon size={16} className="mr-1" />
                      <span>May 15, 8:45 AM</span>
                    </div>
                  </div>
                  <button className="ml-auto text-blue-600 hover:text-blue-800">
                    Repeat
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                View All Journeys
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold">Saved Locations</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-4 flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Home</h3>
                  <p className="text-sm text-gray-500">123 Main Street</p>
                </div>
                <button className="ml-auto text-gray-400 hover:text-gray-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
              <div className="p-4 flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Office</h3>
                  <p className="text-sm text-gray-500">456 Business Ave</p>
                </div>
                <button className="ml-auto text-gray-400 hover:text-gray-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
              <div className="p-4 flex items-center">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Coffee Shop</h3>
                  <p className="text-sm text-gray-500">789 Cafe Street</p>
                </div>
                <button className="ml-auto text-gray-400 hover:text-gray-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Add New Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};