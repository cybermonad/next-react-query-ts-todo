import { Metadata } from "next"
import { Inter } from "next/font/google"

import TanStackProvider from "@/providers/tanstack-provider"
import "@/styles/globals.css"

import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "todo",
  description: "тудушка на нексте, тс, и танстаке"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackProvider>{children}</TanStackProvider>
        <Toaster />
      </body>
    </html>
  )
}
