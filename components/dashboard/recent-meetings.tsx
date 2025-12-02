import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

const recentMeetings = [
  {
    id: 1,
    title: "Weekly Team Standup",
    date: "May 15, 2023",
    time: "10:00 AM",
    duration: "45 min",
    status: "completed",
    participants: [
      { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32", initials: "AJ" },
      { name: "Sarah Miller", avatar: "/placeholder.svg?height=32&width=32", initials: "SM" },
      { name: "Jordan Lee", avatar: "/placeholder.svg?height=32&width=32", initials: "JL" },
    ],
  },
  {
    id: 2,
    title: "Product Roadmap Discussion",
    date: "May 12, 2023",
    time: "2:00 PM",
    duration: "60 min",
    status: "completed",
    participants: [
      { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32", initials: "AJ" },
      { name: "Morgan Chen", avatar: "/placeholder.svg?height=32&width=32", initials: "MC" },
      { name: "Taylor Swift", avatar: "/placeholder.svg?height=32&width=32", initials: "TS" },
    ],
  },
  {
    id: 3,
    title: "Client Onboarding Call",
    date: "May 10, 2023",
    time: "11:30 AM",
    duration: "30 min",
    status: "completed",
    participants: [
      { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32", initials: "AJ" },
      { name: "Sarah Miller", avatar: "/placeholder.svg?height=32&width=32", initials: "SM" },
    ],
  },
]

export function RecentMeetings() {
  return (
    <div className="space-y-4">
      {recentMeetings.map((meeting) => (
        <div key={meeting.id} className="flex items-center justify-between border-b pb-4">
          <div className="space-y-1">
            <h4 className="font-medium">{meeting.title}</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{meeting.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{meeting.duration}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {meeting.participants.slice(0, 3).map((participant, i) => (
                <Avatar key={i} className="h-6 w-6 border-2 border-background">
                  <AvatarImage src={participant.avatar || "/placeholder.svg"} alt={participant.name} />
                  <AvatarFallback>{participant.initials}</AvatarFallback>
                </Avatar>
              ))}
              {meeting.participants.length > 3 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                  +{meeting.participants.length - 3}
                </div>
              )}
            </div>

            <Badge variant="outline">{meeting.status}</Badge>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/meetings/${meeting.id}`}>View Details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Download Summary</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}
