import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Download } from "lucide-react"

export function MeetingSummary() {
  // This would typically be fetched from an API after processing
  const summaryData = {
    title: "Weekly Team Standup",
    date: "May 15, 2023",
    duration: "45 minutes",
    participants: ["Alex Johnson", "Sarah Miller", "Jordan Lee", "Morgan Chen"],
    summary: `
      The team discussed progress on the Q2 roadmap and identified several key priorities:
      
      1. User Dashboard Redesign
      - Sarah presented the new mockups for the user dashboard
      - Team agreed on the simplified layout with improved data visualization
      - Timeline: Design to be finalized by Friday, development to start next week
      
      2. Authentication Bug
      - Jordan reported progress on the authentication issue affecting some users on staging
      - Root cause identified as a caching problem with session tokens
      - Fix is being tested and should be deployed by tomorrow
      
      3. Design System Updates
      - Morgan completed the component review and found some inconsistencies in the color palette
      - Team agreed to schedule a dedicated session to review the design system on Thursday
      - Goal is to standardize all UI components across the platform
      
      4. Client Meeting Preparation
      - Team discussed agenda for next week's client presentation
      - Alex will prepare the slide deck and share for review by Wednesday
      - Everyone should provide their section updates by Tuesday EOD
    `,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Meeting Summary</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Copy className="h-4 w-4" />
              <span className="hidden sm:inline">Copy</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">{summaryData.title}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span>{summaryData.date}</span>
              <span>•</span>
              <span>{summaryData.duration}</span>
              <span>•</span>
              <span>{summaryData.participants.length} participants</span>
            </div>
          </div>

          <div className="rounded-md border p-4 bg-muted/20">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {summaryData.summary.split("\n").map((line, i) => (
                <p key={i} className={line.trim() === "" ? "my-4" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-md border p-4">
            <h4 className="font-medium mb-2">Participants</h4>
            <div className="flex flex-wrap gap-2">
              {summaryData.participants.map((participant, index) => (
                <div key={index} className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full text-sm">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                    {participant.charAt(0)}
                  </div>
                  <span>{participant}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
