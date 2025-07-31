'use client';

import { Heart, User, MessageSquare } from 'lucide-react';
import { signIn } from 'next-auth/react'; // Import the signIn function from NextAuth
import Link from 'next/link'; // Import Link for the guest button

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
                <Heart className="text-purple-500" size={48} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              A Safe Space to Be Heard
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Spero is your AI-powered virtual companion, here to listen without judgment. Start a conversation, find resources, and take a step towards wellness.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* The guest button is now a simple link to the chat page */}
              <Link
                href="/chat"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                Chat as Guest
              </Link>
              {/* The sign-in button now uses the NextAuth signIn function */}
              <button
                onClick={() => signIn('google', { callbackUrl: '/chat' })}
                className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-3 px-8 rounded-lg shadow-lg border border-purple-200 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Sign In with Google
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">How Spero Can Help</h2>
            <p className="text-gray-500 mt-2">Tools and support, tailored for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
                <MessageSquare size={32} className="mx-auto text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Empathetic Conversations</h3>
                <p className="text-gray-500">
                    Talk through your thoughts and feelings in a secure, private chat.
                </p>
            </div>
            <div className="text-center p-6">
                <User size={32} className="mx-auto text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Resources</h3>
                <p className="text-gray-500">
                    Discover helpful articles, books, and tips based on your conversation.
                </p>
            </div>
             <div className="text-center p-6">
                <Heart size={32} className="mx-auto text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Support Finder</h3>
                <p className="text-gray-500">
                    Find nearby therapists, wellness centers, and peaceful nature spots.
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
