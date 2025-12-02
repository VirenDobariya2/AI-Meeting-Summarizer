import { Card, CardContent } from "@/components/ui/card"
import { LightbulbIcon } from "lucide-react"

// Mock data for key points
const keyPoints = [
  {
    id: "1",
    point: "AI integration is on track for Q3 release",
  },
  {
    id: "2",
    point: "Analytics dashboard will be delayed by two weeks",
  },
  {
    id: "3",
    point: "Sales team has already been promoting the analytics feature",
  },
  {
    id: "4",
    point: "Team agreed to release analytics dashboard in phases",
  },
  {
    id: "5",
    point: "Core functionality will be prioritized for the first release",
  },
]

export function KeyPoints() {
  return (
    <div className="space-y-4">
      {keyPoints.map((item) => (
        <Card key={item.id}>
          <CardContent className="flex items-start gap-4 p-4">
            <div className="rounded-full bg-primary/10 p-2">
              <LightbulbIcon className="h-4 w-4 text-primary" />
            </div>
            <p>{item.point}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
