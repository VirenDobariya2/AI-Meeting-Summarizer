import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Send, Edit } from "lucide-react"

export function EmailPreview() {
  // This would typically be generated from the meeting summary and action items
  const emailContent = `
Subject: Meeting Summary: Weekly Team Standup (May 15, 2023)

Hi team,

Here's a summary of our Weekly Team Standup meeting today:

Key Points:
- User Dashboard Redesign: Sarah presented new mockups, team agreed on simplified layout with improved data visualization. Design to be finalized by Friday, development starts next week.
- Authentication Bug: Jordan reported progress on the issue affecting some users on staging. Root cause identified as a caching problem with session tokens. Fix being tested, deployment expected tomorrow.
- Design System Updates: Morgan completed component review and found inconsistencies in the color palette. Team scheduled a dedicated review session for Thursday.
- Client Meeting Preparation: Team discussed agenda for next week's client presentation. Alex will prepare slide deck by Wednesday, everyone to provide section updates by Tuesday EOD.

Action Items:
1. Sarah: Complete user dashboard redesign by Friday
2. Jordan: Fix authentication bug by tomorrow
3. Alex: Schedule design system review for Thursday
4. Alex: Prepare client presentation slides by Wednesday
5. All: Provide section updates for client presentation by Tuesday EOD

Please let me know if I missed anything or if you have any questions.

Best regards,
[Your Name]
  `

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Follow-up Email</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Edit className="h-4 w-4" />
              <span className="hidden sm:inline">Edit</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Copy className="h-4 w-4" />
              <span className="hidden sm:inline">Copy</span>
            </Button>
            <Button size="sm" className="gap-1">
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">Send</span>
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea className="min-h-[400px] font-mono text-sm" value={emailContent} readOnly />
      </CardContent>
    </Card>
  )
}
