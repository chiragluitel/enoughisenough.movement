import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaLinkedin, FaApple, FaTwitter } from 'react-icons/fa';
import { useOAuth } from '../../hooks/Authentication/useOAuth';
import Spinner from '../../helpers/Spinner';

const LoginPage: React.FC = () => {
  const {
    signInWithGithub,
    signInWithGoogle,
    signInWithFacebook,
    signInWithLinkedIn,
    signInWithApple,
    signInWithTwitter,
    error,
    isPending,
  } = useOAuth();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-50 to-gray-100 px-4">
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-red-900 opacity-10 rounded-tr-full"></div>
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-xl sm:p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Login with Your Favorite Platform
        </h2>
        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-3 border border-red-400 rounded-md mb-4">
            {error}
          </div>
        )}

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={signInWithGithub}
            className="w-full bg-gray-800 text-white py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-900 transition duration-300 shadow-md"
          >
            <FaGithub className="text-xl" />
            <span className="text-lg">Continue with GitHub</span>
          </button>

          <button
            onClick={signInWithGoogle}
            className="w-full bg-blue-600 text-white py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors duration-300 shadow-md"
          >
            <FaGoogle className="text-xl" />
            <span className="text-lg">Continue with Google</span>
          </button>

          <button
            onClick={signInWithFacebook}
            className="w-full bg-blue-800 text-white py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-900 transition duration-300 shadow-md"
          >
            <FaFacebook className="text-xl" />
            <span className="text-lg">Continue with Facebook</span>
          </button>

          <button
            onClick={signInWithLinkedIn}
            className="w-full bg-sky-700 text-white py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-sky-800 transition duration-300 shadow-md"
          >
            <FaLinkedin className="text-xl" />
            <span className="text-lg">Continue with LinkedIn</span>
          </button>

          <button
            onClick={signInWithApple}
            className="w-full bg-black text-white py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-900 transition duration-300 shadow-md"
          >
            <FaApple className="text-xl" />
            <span className="text-lg">Continue with Apple</span>
          </button>

          <button
            onClick={signInWithTwitter}
            className="w-full bg-sky-500 text-white py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-sky-600 transition duration-300 shadow-md"
          >
            <FaTwitter className="text-xl" />
            <span className="text-lg">Continue with Twitter</span>
          </button>

          {isPending && <Spinner />}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
