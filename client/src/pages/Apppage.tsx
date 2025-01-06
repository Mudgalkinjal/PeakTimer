import Header from '../components/Header'
import GradientButton from '../components/Buttons/GradientButton'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001'

export default function AppPage() {
  const [userData, setUserData] = useState<{
    name: string
    email: string
  } | null>(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  function handleList() {
    navigate('/task-list')
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('authToken')
        if (!token) {
          throw new Error('No token found')
        }
        const response = await fetch(`${API_URL}/api/auth/protected`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch user data')
        }

        const data = await response.json()
        setUserData({ name: data.user.name, email: data.user.email })
      } catch (error) {
        console.error('Error fetching user data:', error)
        navigate('/signin')
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!userData) {
    return <div>Error fetching user data. Please try again later.</div>
  }
  function handleClick() {}
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex flex-col items-center">
      {/* Header Section */}
      <Header />
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Welcome, {userData.name}!
        </h1>
        <p className="text-center text-gray-600">
          Your email: <strong>{userData.email}</strong>
        </p>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        {/* Informational Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What’s next?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>💪 Create your personalized fitness profile to get started.</li>
            <li>📋 Plan detailed workout sessions tailored to your goals.</li>
            <li>🔍 Review your previous workouts and track your progress.</li>
            <li>📅 Revisit and reuse your earlier plans for consistency.</li>
          </ul>
        </section>

        {/* Action Buttons */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GradientButton text="Create Your Profile" onClick={handleClick} />
          <GradientButton text="Plan Workouts" onClick={handleClick} />
          <GradientButton text="View Previous Workouts" onClick={handleClick} />
          <GradientButton text="View Previous Plans" onClick={handleClick} />
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-500">
        <p>&copy; 2025 Your Fitness App. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
