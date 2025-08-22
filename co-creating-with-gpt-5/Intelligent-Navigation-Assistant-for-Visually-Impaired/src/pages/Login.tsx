import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, UserIcon, KeyIcon } from 'lucide-react';
interface LoginProps {
  onLogin: () => void;
}
export const Login: React.FC<LoginProps> = ({
  onLogin
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1000);
  };
  return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-xl shadow-xl p-8 border border-blue-100">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
              <img src="https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?q=80&w=150&auto=format&fit=crop" alt="VisionGuide Logo" className="w-16 h-16 object-cover rounded-full" />
            </div>
          </div>
          <h1 className="text-center text-3xl font-bold text-gray-900 mb-2">
            VisionGuide
          </h1>
          <h2 className="text-center text-2xl font-bold text-blue-800 mb-6">
            Log in to your account
          </h2>
          <p className="text-center text-indigo-600 mb-6">
            Or{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 underline">
              create a new account
            </Link>
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="relative">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-blue-400" />
                </div>
                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 pl-10 border border-blue-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-lg" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <KeyIcon className="h-5 w-5 text-blue-400" />
                </div>
                <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-3 pl-10 pr-10 border border-blue-200 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-lg" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button type="button" className="text-blue-400 hover:text-blue-500 focus:outline-none" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                    {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button type="submit" disabled={isLoading} className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white shadow-lg ${isLoading ? 'bg-blue-400' : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all hover:translate-y-[-2px]`}>
                {isLoading ? <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span> : 'Log in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};