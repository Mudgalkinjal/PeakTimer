import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001'

type SignUpFormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

// Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
})

const SignUpPage = () => {
  const navigate = useNavigate()

  function handleSignInNavigate() {
    navigate('/signin')
  }

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (data: SignUpFormData) => {
    setError('')
    setSuccess('')
    try {
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()

      if (!response.ok) {
        setError(responseData.message)
      } else {
        // Handle success response
        setSuccess(responseData.message)
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-md border border-gray-700 rounded-lg p-6 bg-gray-800 shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Sign Up
        </h2>

        {/* Error Message */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Success Message */}
        {success && (
          <div className="text-green-500 text-center mb-4">{success}</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring focus:ring-green-200`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:ring focus:ring-green-200`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password')}
              className={`text-black mt-1 block w-full px-4 py-2 border rounded-lg ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } focus:ring focus:ring-green-200`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-white"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register('confirmPassword')}
              className={`text-black mt-1 block w-full px-4 py-2 border rounded-lg ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              } focus:ring focus:ring-green-200`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        {/* Sign In Button */}
        <button
          onClick={handleSignInNavigate}
          className="w-full mt-4 bg-gray-100 text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-200"
        >
          Already have an account? Sign In
        </button>
      </div>
    </div>
  )
}

export default SignUpPage
