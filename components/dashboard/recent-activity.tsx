import { Activity, FileText, CheckSquare, Mail, Upload } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    type: "upload",
    user: {
      name: "You",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "YO",
    },
    content: "uploaded a new meeting recording",
    target: "Weekly Team Standup",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "summary",
    user: {
      name: "AI Assistant",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AI",
    },
    content: "generated a summary for",
    target: "Product Roadmap Discussion",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "action",
    user: {
      name: "Morgan Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MC",
    },
    content: "completed the action item",
    target: "Review design system components",
    time: "Yesterday",
  },
  {
    id: 4,
    type: "email",
    user: {
      name: "You",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "YO",
    },
    content: "sent a follow-up email for",
    target: "Client Onboarding Call",
    time: "2 days ago",
  },
  {
    id: 5,
    type: "upload",
    user: {
      name: "Jordan Lee",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JL",
    },
    content: "uploaded a new meeting recording",
    target: "Backend Architecture Planning",
    time: "2 days ago",
  },
]

const getActivityIcon = (type: string) => {
  switch (type) {
    case "upload":
      return <Upload className="h-4 w-4" />
    case "summary":
      return <FileText className="h-4 w-4" />
    case "action":
      return <CheckSquare className="h-4 w-4" />
    case "email":
      return <Mail className="h-4 w-4" />
    default:
      return <Activity className="h-4 w-4" />
  }
}

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex gap-4">
          <div className="mt-0.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              {getActivityIcon(activity.type)}
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="flex items-center gap-2">
                <Avatar className="h-6 w-6 inline-block mr-1">
                  <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                  <AvatarFallback>{activity.user.initials}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{activity.user.name}</span>
              </span>{" "}
              {activity.content} <span className="font-medium">{activity.target}</span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
