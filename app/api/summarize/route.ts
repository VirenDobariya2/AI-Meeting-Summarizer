import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { transcript } = await req.json()

    if (!transcript) {
      return NextResponse.json({ error: "Transcript is required" }, { status: 400 })
    }
    return NextResponse.json({
      summary: {
        key_points: [
          "Discussed Q2 product roadmap priorities",
          "Front-end redesign planned for user dashboard",
          "Database schema needs to be updated for new features",
          "Client follow-up meeting to be scheduled next week",
        ],
        action_items: [
          {
            task: "Complete front-end redesign of user dashboard",
            assignee: "John",
            dueDate: "Next Friday",
          },
          {
            task: "Update database schema for new user metrics",
            assignee: "Sarah",
            dueDate: "Wednesday",
          },
          {
            task: "Schedule follow-up meeting with client",
            assignee: "Team lead",
            dueDate: "Next week",
          },
        ],
      },
    })
  } catch (error) {
    console.error("Summarization error:", error)
    return NextResponse.json({ error: "Failed to generate summary" }, { status: 500 })
  }
}
