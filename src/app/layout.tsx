import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import {NuqsAdapter} from "nuqs/adapters/next/app"
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Docsy",
  description: `Docsy is a modern, minimalistic document editor designed to help you write, edit, and collaborate effortlessly. Built with a sleek, distraction-free interface, Docsy focuses on giving you the tools to bring your words to life—whether you're drafting quick notes, crafting long-form content, or collaborating with a team in real-time.

  With Docsy, your creativity flows uninterrupted. Say goodbye to cluttered toolbars and hello to a smooth, intuitive writing experience that adapts to your needs.
  
  Key Highlights:
  
  Clean, minimal interface for distraction-free writing.
  Real-time collaboration for seamless teamwork.
  Smart autosave and version history to never lose your work.
  Flexible document styling to match your creative vision.
  Cloud-synced, so your docs are accessible anywhere.
  Docsy – Your Words, Your Way.  
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster/>
                  {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  )
}
