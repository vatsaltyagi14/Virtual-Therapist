import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import AuthProvider from "@/components/AuthProvider"; // Import the new provider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spero AI - Your Virtual Companion",
  description: "A safe space to talk, reflect, and find support. Your AI-powered virtual therapist.",
  keywords: "mental health, ai therapist, virtual companion, support, chat, spero ai",
};

const RootLayout = function ({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        {/* Wrap the entire application with the AuthProvider */}
        <AuthProvider>
          <header className="absolute top-0 left-0 w-full p-4 text-center">
              <h2 className="text-2xl font-bold text-purple-600">Spero AI</h2>
          </header>

          <main>{children}</main>

          <footer className="text-center p-4 text-sm text-gray-500">
              <p>Spero AI is a supportive companion and not a replacement for professional medical advice.</p>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
 
export default RootLayout;
