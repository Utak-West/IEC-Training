import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IEC</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Gamified Training System
                </h1>
                <p className="text-sm text-gray-600">
                  Powered by A.M. Consulting
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Dashboard v1.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionizing Electrical Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive gamified training platform for the electrical industry, 
            featuring AI-driven learning, project simulations, and immersive experiences.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Target Users</p>
                <p className="text-2xl font-semibold text-gray-900">500+</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                <p className="text-2xl font-semibold text-gray-900">90%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Engagement</p>
                <p className="text-2xl font-semibold text-gray-900">85%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">ROI</p>
                <p className="text-2xl font-semibold text-gray-900">250%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">
                AI-Driven Learning
              </h3>
            </div>
            <p className="text-gray-600">
              Personalized learning paths that adapt to individual progress, learning styles, 
              and preferences using advanced AI algorithms.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">
                Project Simulations
              </h3>
            </div>
            <p className="text-gray-600">
              Interactive scenarios that replicate real-world electrical projects, 
              providing safe environments for practice and skill development.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">
                Gamification
              </h3>
            </div>
            <p className="text-gray-600">
              Points, badges, leaderboards, and achievement systems that create 
              intrinsic motivation for continued learning and skill development.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">
                Progress Tracking
              </h3>
            </div>
            <p className="text-gray-600">
              Comprehensive dashboards and analytics that provide detailed insights 
              into learning progress for apprentices, instructors, and administrators.
            </p>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Timeline</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-900">Phase 1: Georgia Pilot</h4>
                  <span className="text-sm text-gray-600">Q4 2025 - Q1 2026</span>
                </div>
                <p className="text-gray-600">Core platform development and pilot program with 50-100 apprentices</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-900">Phase 2: Southeast Expansion</h4>
                  <span className="text-sm text-gray-600">Q2 - Q3 2026</span>
                </div>
                <p className="text-gray-600">Platform refinement and regional rollout to 200-300 users</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-900">Phase 3: National Deployment</h4>
                  <span className="text-sm text-gray-600">Q4 2026+</span>
                </div>
                <p className="text-gray-600">Nationwide availability to all IEC chapters with community features</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Electrical Training?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join us in revolutionizing how the electrical industry trains its workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Documentation
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IEC</span>
              </div>
              <span className="text-gray-300">× A.M. Consulting</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                "If We Can Imagine It, Then We Can Create It."
              </p>
              <p className="text-gray-500 text-xs mt-1">
                © 2025 IEC & A.M. Consulting. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
