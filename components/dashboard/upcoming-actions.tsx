import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

// Mock data for upcoming actions
const actions = [
  {
    id: "1",
    task: "Define MVP for analytics dashboard",
    assignee: "Michael",
    dueDate: new Date(2024, 4, 23),
    completed: false,
  },
  {
    id: "2",
    task: "Schedule follow-up meeting with Sarah",
    assignee: "Michael",
    dueDate: new Date(2024, 4, 22),
    completed: true,
  },
  {
    id: "3",
    task: "Prepare Q3 marketing campaign draft",
    assignee: "John",
    dueDate: new Date(2024, 4, 25),
    completed: false,
  },
  {
    id: "4",
    task: "Review AI integration progress",
    assignee: "Sarah",
    dueDate: new Date(2024, 4, 24),
    completed: false,
  },
]

export function UpcomingActions() {
  return (
    <div className="space-y-4">
      {actions.map((action) => (
        <div
          key={action.id}
          className={cn("flex items-start space-x-4 rounded-md border p-4", action.completed && "bg-muted/50")}
        >
          <Checkbox checked={action.completed} />
          <div className="flex-1 space-y-1">
            <p className={cn("font-medium leading-none", action.completed && "line-through text-muted-foreground")}>
              {action.task}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span>Assignee: {action.assignee}</span>
              <span>Due: {format(action.dueDate, "MMM d, yyyy")}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
