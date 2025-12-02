import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Download, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const meetings = [
  {
    id: 1,
    title: "Weekly Team Standup",
    date: "2023-05-15",
    duration: "45 min",
    status: "completed",
    actionItems: 5,
  },
  {
    id: 2,
    title: "Product Roadmap Discussion",
    date: "2023-05-14",
    duration: "90 min",
    status: "completed",
    actionItems: 8,
  },
  {
    id: 3,
    title: "Client Onboarding Call",
    date: "2023-05-13",
    duration: "60 min",
    status: "completed",
    actionItems: 3,
  },
  {
    id: 4,
    title: "Design System Review",
    date: "2023-05-12",
    duration: "75 min",
    status: "completed",
    actionItems: 4,
  },
  {
    id: 5,
    title: "Marketing Campaign Planning",
    date: "2023-05-10",
    duration: "120 min",
    status: "processing",
    actionItems: 0,
  },
]

export function MeetingList() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Meeting</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action Items</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {meetings.map((meeting) => (
              <TableRow key={meeting.id}>
                <TableCell className="font-medium">{meeting.title}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span>{meeting.date}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span>{meeting.duration}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={meeting.status === "completed" ? "outline" : "secondary"}>{meeting.status}</Badge>
                </TableCell>
                <TableCell>{meeting.actionItems}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Summary</DropdownMenuItem>
                      <DropdownMenuItem>View Action Items</DropdownMenuItem>
                      <DropdownMenuItem>Generate Email</DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download Transcript
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
