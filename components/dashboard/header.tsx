"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Bell, Menu, MessageSquare, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { SidebarTrigger } from "@/components/ui/sidebar"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export function DashboardHeader() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // In a real app, you would fetch the user from your auth provider
    // For now, we'll use a mock user from localStorage if available
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        // Fallback to default user if parsing fails
        setUser({
          id: "user-1",
          name: "John Doe",
          email: "john@example.com",
          avatar: "/placeholder.svg?height=32&width=32",
        })
      }
    } else {
      // Set default user if none in localStorage
      setUser({
        id: "user-1",
        name: "John Doe",
        email: "john@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      })
    }
  }, [])

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <EnhancedSidebar activeItem="overview" onNavigate={() => {}} />
        </SheetContent>
      </Sheet>

      <SidebarTrigger />

      <Link href="/dashboard" className="flex items-center gap-2 md:hidden">
        <div className="rounded-md bg-primary p-1">
          <MessageSquare className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="font-semibold">AI Meeting Summarizer</span>
      </Link>

      <div className="relative flex-1 md:grow">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search meetings, summaries, action items..."
          className="w-full bg-background pl-8 md:w-2/3 lg:w-1/3"
        />
      </div>

      <Button variant="outline" size="icon" className="relative">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
        <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-primary"></span>
      </Button>

      <Link href="/dashboard/profile">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name || "User"} />
          <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
        <span className="sr-only">Profile</span>
      </Link>
    </header>
  )
}
