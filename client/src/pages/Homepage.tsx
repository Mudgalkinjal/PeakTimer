import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  function handleSignUpNavigate() {
    navigate('/signup')
  }
  function handleSignInNavigate() {
    navigate('/signin')
  }
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-red-500">Peak Timer</span>!
        </h1>
        <p className="text-lg mb-8">
          Plan your workouts, track your sessions, and achieve your fitness
          goals with ease.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSignUpNavigate}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Get Started
          </button>
          <button
            onClick={handleSignInNavigate}
            className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Sign In
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-t from-gray-900 to-black py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Use this app?
          </h2>
          <p className="text-gray-300 text-lg">
            Take control of your fitness journey with personalized workout
            planning and tracking.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-3">
              Create Custom Workouts
            </h3>
            <p className="text-gray-300">
              Design your workouts with warm-ups, exercises, cool-downs, and
              more.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-3">
              Track Your Progress
            </h3>
            <p className="text-gray-300">
              Stay on top of your fitness with detailed tracking of reps, sets,
              and time.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-3">
              AI-Powered Suggestions
            </h3>
            <p className="text-gray-300">
              Get workout recommendations tailored to your goals and
              preferences.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
