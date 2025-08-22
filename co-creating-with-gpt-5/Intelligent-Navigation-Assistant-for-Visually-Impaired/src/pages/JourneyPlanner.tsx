import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, SearchIcon, MapPinIcon, NavigationIcon } from 'lucide-react';
export const JourneyPlanner: React.FC = () => {
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [routes, setRoutes] = useState<any[]>([]);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      setRoutes([{
        id: 1,
        name: 'Recommended Route',
        duration: '15 minutes',
        distance: '0.8 miles',
        accessibility: 'High',
        description: 'This route follows main sidewalks with accessible crossings and avoids construction areas.',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop'
      }, {
        id: 2,
        name: 'Alternative Route',
        duration: '12 minutes',
        distance: '0.7 miles',
        accessibility: 'Medium',
        description: 'Shorter route but includes one section with stairs. Not recommended for wheelchair users.',
        image: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?q=80&w=600&auto=format&fit=crop'
      }, {
        id: 3,
        name: 'Public Transit Route',
        duration: '20 minutes',
        distance: '1.2 miles',
        accessibility: 'High',
        description: 'Uses accessible bus route 42 with stop announcements and level boarding.',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop'
      }]);
    }, 1500);
  };
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ChevronLeftIcon size={20} />
            <span>Back to Dashboard</span>
          </Link>
          <div className="relative mb-10 mt-4 py-12 px-6 rounded-xl overflow-hidden bg-gradient-to-r from-green-600 to-emerald-800 text-white shadow-xl">
            <div className="absolute inset-0 opacity-20">
              <img src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1200&auto=format&fit=crop" alt="Map Background" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-2">Journey Planner</h1>
              <p className="text-green-100 text-xl">
                Plan your route with accessibility in mind
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-xl shadow-xl p-8 border border-green-100">
            <h2 className="text-2xl font-bold mb-6 text-green-800">
              Plan Your Journey
            </h2>
            <form onSubmit={handleSearch}>
              <div className="space-y-6">
                <div className="relative">
                  <label htmlFor="start-location" className="block text-sm font-medium text-gray-700 mb-2">
                    Starting Location
                  </label>
                  <div className="flex">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none mt-6">
                      <MapPinIcon size={20} className="text-green-500" />
                    </div>
                    <input type="text" id="start-location" className="block w-full pl-10 pr-12 py-3 border border-green-200 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="Enter starting point" value={startLocation} onChange={e => setStartLocation(e.target.value)} required />
                    <button type="button" className="absolute right-2 top-9 p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200" aria-label="Use current location">
                      <NavigationIcon size={20} />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                    Destination
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPinIcon size={20} className="text-green-500" />
                    </div>
                    <input type="text" id="destination" className="block w-full pl-10 py-3 border border-green-200 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="Enter destination" value={destination} onChange={e => setDestination(e.target.value)} required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Accessibility Preferences
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors cursor-pointer">
                      <input type="checkbox" className="rounded border-green-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 mr-3 h-5 w-5" defaultChecked />
                      <span>Avoid stairs</span>
                    </label>
                    <label className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors cursor-pointer">
                      <input type="checkbox" className="rounded border-green-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 mr-3 h-5 w-5" defaultChecked />
                      <span>Prefer well-lit paths</span>
                    </label>
                    <label className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors cursor-pointer">
                      <input type="checkbox" className="rounded border-green-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 mr-3 h-5 w-5" defaultChecked />
                      <span>Avoid construction areas</span>
                    </label>
                    <label className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors cursor-pointer">
                      <input type="checkbox" className="rounded border-green-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 mr-3 h-5 w-5" />
                      <span>Include public transit</span>
                    </label>
                  </div>
                </div>
                <div className="pt-4">
                  <button type="submit" disabled={isSearching} className={`w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-lg shadow-lg text-white font-medium text-lg ${isSearching ? 'bg-green-400' : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition-all hover:translate-y-[-2px]`}>
                    {isSearching ? <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Searching Routes...
                      </span> : <>
                        <SearchIcon size={20} className="mr-2" />
                        Find Routes
                      </>}
                  </button>
                </div>
              </div>
            </form>
          </div>
          {routes.length > 0 && <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-green-100">
              <div className="p-6 border-b border-green-100 bg-gradient-to-r from-green-50 to-emerald-50">
                <h2 className="text-2xl font-bold text-green-800">
                  Available Routes
                </h2>
                <p className="text-green-600">
                  Select the best route for your needs
                </p>
              </div>
              <div className="divide-y divide-green-100">
                {routes.map(route => <div key={route.id} className="p-6 hover:bg-green-50 transition-colors">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 rounded-lg overflow-hidden">
                        <img src={route.image} alt={route.name} className="w-full h-48 object-cover" />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-xl font-bold text-green-800">
                            {route.name}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${route.accessibility === 'High' ? 'bg-green-100 text-green-800 border border-green-200' : route.accessibility === 'Medium' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                            {route.accessibility} Accessibility
                          </span>
                        </div>
                        <div className="flex space-x-4 text-sm text-gray-500 mb-3">
                          <span className="bg-green-50 px-3 py-1 rounded-full border border-green-100">
                            {route.duration}
                          </span>
                          <span className="bg-green-50 px-3 py-1 rounded-full border border-green-100">
                            {route.distance}
                          </span>
                        </div>
                        <p className="mb-4 text-gray-600">
                          {route.description}
                        </p>
                        <div className="flex space-x-3">
                          <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg shadow-md transform transition-all hover:translate-y-[-2px]">
                            Start Navigation
                          </button>
                          <button className="px-4 py-2 border border-green-300 hover:bg-green-50 rounded-lg shadow-sm">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>}
        </div>
      </div>
    </div>;
};