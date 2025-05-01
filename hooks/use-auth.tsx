"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"
import { toast } from "@/components/ui/use-toast"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => void
  signInWithGoogle: () => Promise<void>
  signInWithGithub: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is already signed in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    // In a real app, you would validate credentials against a backend
    // For demo purposes, we'll check against localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const foundUser = users.find((u: any) => u.email === email)

    if (!foundUser || foundUser.password !== password) {
      throw new Error("Invalid credentials")
    }

    const userInfo: User = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      avatar: foundUser.avatar,
    }

    localStorage.setItem("user", JSON.stringify(userInfo))
    setUser(userInfo)
    setIsAuthenticated(true)
  }

  const signUp = async (name: string, email: string, password: string) => {
    // In a real app, you would send this data to your backend
    // For demo purposes, we'll store in localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    // Check if email already exists
    if (users.some((u: any) => u.email === email)) {
      throw new Error("Email already in use")
    }

    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      password, // In a real app, NEVER store passwords in plain text
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
    }

    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    // Auto sign in after sign up
    const userInfo: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      avatar: newUser.avatar,
    }

    localStorage.setItem("user", JSON.stringify(userInfo))
    setUser(userInfo)
    setIsAuthenticated(true)
  }

  const signOut = () => {
    localStorage.removeItem("user")
    setUser(null)
    setIsAuthenticated(false)
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    })
  }

  const signInWithGoogle = async () => {
    // In a real app, you would use the Google OAuth API
    // For demo purposes, we'll create a mock user
    const mockGoogleUser: User = {
      id: `google-${Date.now()}`,
      name: "Google User",
      email: "google.user@example.com",
      avatar: "https://ui-avatars.com/api/?name=Google+User&background=random",
    }

    localStorage.setItem("user", JSON.stringify(mockGoogleUser))
    setUser(mockGoogleUser)
    setIsAuthenticated(true)
    toast({
      title: "Signed in with Google",
      description: "You have successfully signed in with Google.",
    })
  }

  const signInWithGithub = async () => {
    // In a real app, you would use the GitHub OAuth API
    // For demo purposes, we'll create a mock user
    const mockGithubUser: User = {
      id: `github-${Date.now()}`,
      name: "GitHub User",
      email: "github.user@example.com",
      avatar: "https://ui-avatars.com/api/?name=GitHub+User&background=random",
    }

    localStorage.setItem("user", JSON.stringify(mockGithubUser))
    setUser(mockGithubUser)
    setIsAuthenticated(true)
    toast({
      title: "Signed in with GitHub",
      description: "You have successfully signed in with GitHub.",
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signUp,
        signOut,
        signInWithGoogle,
        signInWithGithub,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
