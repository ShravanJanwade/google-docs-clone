"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangleIcon } from "lucide-react";

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6 overflow-hidden">
      {/* Floating smoke effect */}
      <motion.div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full opacity-20 blur-3xl"
        animate={{ y: [-5, 5, -5], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      {/* Falling Bubbles Effect */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-300 dark:bg-blue-600 rounded-full opacity-50"
          style={{
            width: `${Math.random() * 10 + 10}px`,
            height: `${Math.random() * 10 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${-Math.random() * 100}px`,
          }}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Error Icon */}
      <motion.div
        className="relative flex justify-center mb-6"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="bg-rose-100 dark:bg-rose-900 p-4 rounded-full shadow-lg relative">
          <AlertTriangleIcon className="size-14 text-rose-600 dark:text-rose-400" />
        </div>
      </motion.div>

      {/* Error Text */}
      <motion.h1
        className="text-5xl font-bold text-gray-900 dark:text-white"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        Whoops! 🚧
      </motion.h1>
      <p className="text-gray-700 dark:text-gray-300 mt-3 max-w-md mx-auto">
        {error.message || "Something went wrong! Try again or go back home."}
      </p>
      <motion.span
          className="absolute top-12 right-12 text-5xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          😵‍💫
        </motion.span>

      {/* Buttons */}
      <motion.div
        className="flex items-center gap-x-4 mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Button
          onClick={reset}
          className="font-medium px-6 py-3 shadow-lg transform hover:scale-105 transition"
        >
          Try Again 🔄
        </Button>
        <Button
          asChild
          variant="outline"
          className="font-medium px-6 py-3 shadow-md transform hover:scale-105 transition"
        >
          <Link href="/">Go Home 🏠</Link>
        </Button>
      </motion.div>

      {/* Floating Fun Text */}
      <motion.div
        className="absolute bottom-6 text-sm text-gray-500 dark:text-gray-400"
        animate={{ y: [0, 3, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        Click "Try Again" or "Go Home" to escape! 🚀
      </motion.div>
    </div>
  );
};

export default ErrorPage;
