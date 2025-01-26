import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      navigate('/chat')
    }
  }, [navigate])

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (isRegister && !validateEmail(value)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    if (isRegister) {
      if (password !== confirmPassword) {
        setError('Passwords do not match')
        setIsLoading(false)
        return
      }
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address')
        setIsLoading(false)
        return
      }

      fetch('https://chatpdf-9g4j.onrender.com/api/v1/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('Registration failed')
        })
        .then((data) => {
          window.localStorage.setItem('token', data.token)
          navigate('/chat')
        })
        .catch((error) => {
          setError(error.message)
          setIsLoading(false)
        })
    } else {
      fetch('https://chatpdf-9g4j.onrender.com/api/v1/signin', {
        method: 'POST',
        body: JSON.stringify({ login: email || username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('Invalid credentials')
        })
        .then((data) => {
          window.localStorage.setItem('token', data.token)
          navigate('/chat')
        })
        .catch((error) => {
          setError(error.message)
          setIsLoading(false)
        })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-center text-3xl font-bold text-emerald-400 mb-8">
          {isRegister ? 'Create Account' : 'Welcome Back'}
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-900/30 rounded-lg border border-red-400">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegister && (
            <div className="group">
              <label className="block text-emerald-200 text-sm mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 outline-none transition-all"
                />
                <svg
                  className="absolute right-3 top-3.5 opacity-50"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
                  />
                </svg>
              </div>
            </div>
          )}

          <div className="group">
            <label className="block text-emerald-200 text-sm mb-2">
              {isRegister ? 'Email' : 'Email or Username'}
            </label>
            <div className="relative">
              <input
                id="email"
                type={isRegister ? 'email' : 'text'}
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 outline-none transition-all"
              />
              <svg
                className="absolute right-3 top-3.5 opacity-50"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                />
              </svg>
            </div>
            {emailError && (
              <p className="text-rose-400 text-xs mt-1 ml-1">{emailError}</p>
            )}
          </div>

          <div className="group">
            <label className="block text-emerald-200 text-sm mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 outline-none transition-all"
              />
              <svg
                className="absolute right-3 top-3.5 opacity-50"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6-5c1.66 0 3 1.34 3 3v2H9V6c0-1.66 1.34-3 3-3Z"
                />
              </svg>
            </div>
          </div>

          {isRegister && (
            <div className="group">
              <label className="block text-emerald-200 text-sm mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 outline-none transition-all"
                />
                <svg
                  className="absolute right-3 top-3.5 opacity-50"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6-5c1.66 0 3 1.34 3 3v2H9V6c0-1.66 1.34-3 3-3Z"
                  />
                </svg>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || (isRegister && emailError)}
            className="w-full py-3.5 bg-emerald-600/90 hover:bg-emerald-500 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : isRegister ? (
              'Create Account'
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-emerald-300 hover:text-emerald-200 text-sm font-medium transition-all"
          >
            {isRegister
              ? 'Already have an account? Sign In'
              : "Don't have an account? Create One"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
