import React from 'react'

export const Loginform = ({ handleLogin }) => {
  return (
    <div>
          <form className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>

              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                  />
              </div>

              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="********"
                  />
              </div>

              <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4 focus:outline-none focus:shadow-outline"
                  type="submit"
              >
                  Login
              </button>

              <div className="flex items-center justify-center mb-4">
                  <span className="text-gray-600">or</span>
              </div>

              <button
                  className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleLogin}
              >
                  <img
                      src="https://www.svgrepo.com/show/355037/google.svg"
                      alt="Google logo"
                      className="w-5 h-5 mr-2"
                  />
                  Login with Google
              </button>
          </form>

    </div>
  )
}
