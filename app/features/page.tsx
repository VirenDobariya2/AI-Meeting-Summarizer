import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mic,
  FileText,
  CheckSquare,
  Mail,
  BarChartBig,
  Brain,
  Zap,
  Globe,
  Lock,
  Users,
  Clock,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/home/navbar"

export const metadata: Metadata = {
  title: "Features | AI Meeting Summarizer",
  description: "Explore all the powerful features of AI Meeting Summarizer",
}

const mainFeatures = [
  {
    icon: <Mic className="h-12 w-12 text-primary" />,
    title: "Audio/Video Transcription",
    description:
      "Upload any meeting recording format and get accurate transcripts powered by OpenAI Whisper. Our advanced AI handles multiple speakers, accents, and technical terminology with high accuracy.",
  },
  {
    icon: <FileText className="h-12 w-12 text-primary" />,
    title: "Smart Summaries",
    description:
      "Our AI engine condenses hours of meetings into concise, readable summaries highlighting the key points. Summaries are structured with sections for easy scanning and comprehension.",
  },
  {
    icon: <CheckSquare className="h-12 w-12 text-primary" />,
    title: "Action Item Extraction",
    description:
      "Automatically identify commitments, deadlines, and who's responsible for what from your meetings. Track progress and ensure nothing falls through the cracks.",
  },
  {
    icon: <Mail className="h-12 w-12 text-primary" />,
    title: "Email Generation",
    description:
      "Create professional follow-up emails with just one click based on meeting content and action items. Customize templates to match your company's tone and style.",
  },
  {
    icon: <BarChartBig className="h-12 w-12 text-primary" />,
    title: "Meeting Analytics",
    description:
      "Track participation, discussion topics, and recurring themes across all your meetings. Gain insights into meeting effectiveness and team collaboration patterns.",
  },
  {
    icon: <Brain className="h-12 w-12 text-primary" />,
    title: "Advanced AI",
    description:
      "Powered by cutting-edge AI models to ensure the highest quality of transcription and understanding. Our models are continuously trained on diverse meeting data for optimal performance.",
  },
]

const advancedFeatures = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Real-time Processing",
    description: "Get meeting summaries and action items within minutes of uploading your recordings.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Multi-language Support",
    description: "Support for transcription and summarization in over 30 languages.",
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Enterprise-grade Security",
    description: "End-to-end encryption and compliance with major security standards.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Team Collaboration",
    description: "Share summaries and action items with team members and assign tasks directly.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Meeting History",
    description: "Access all your past meetings, summaries, and action items in one place.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Custom AI Training",
    description: "Enterprise plans include custom AI training on your company's terminology and meeting patterns.",
  },
]

const integrations = [
  {
    name: "Slack",
    description: "Share meeting summaries and action items directly to Slack channels.",
    available: true,
  },
  {
    name: "Microsoft Teams",
    description: "Integrate with Teams for seamless meeting recording and summary sharing.",
    available: true,
  },
  {
    name: "Google Calendar",
    description: "Automatically process recordings from Google Calendar meetings.",
    available: true,
  },
  {
    name: "Zoom",
    description: "Direct integration with Zoom for automatic recording uploads.",
    available: true,
  },
  {
    name: "Asana",
    description: "Convert action items into Asana tasks automatically.",
    available: true,
  },
  {
    name: "Jira",
    description: "Create Jira tickets from meeting action items.",
    available: true,
  },
  {
    name: "Notion",
    description: "Export meeting summaries directly to Notion pages.",
    available: true,
  },
  {
    name: "Trello",
    description: "Turn action items into Trello cards with due dates.",
    available: true,
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Powerful Features for
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Productive Meetings
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover all the ways AI Meeting Summarizer can transform your meeting experience and boost team
                productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/demo">See Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Features Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Core Features</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Our comprehensive suite of tools to make your meetings more productive
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Tabs Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Explore Features in Detail</h2>
              <p className="mt-4 text-xl text-muted-foreground">See how our features work in different scenarios</p>
            </div>

            <Tabs defaultValue="transcription" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="transcription">Transcription</TabsTrigger>
                <TabsTrigger value="summaries">Summaries</TabsTrigger>
                <TabsTrigger value="action-items">Action Items</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="transcription" className="p-6 bg-background rounded-lg border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Advanced Transcription</h3>
                    <p className="text-muted-foreground mb-4">
                      Our AI-powered transcription engine converts speech to text with exceptional accuracy, even in
                      challenging conditions:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Multiple speaker detection and labeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Support for technical terminology and industry jargon</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Accent and dialect recognition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Background noise filtering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Timestamps for easy navigation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted p-6 rounded-lg border">
                    <h4 className="font-medium mb-2">Example Transcript</h4>
                    <div className="font-mono text-sm whitespace-pre-wrap text-muted-foreground">
                      [00:01:15] Alex: Let's discuss the Q2 roadmap priorities.
                      <br />
                      [00:01:30] Sarah: I think we should focus on the user dashboard redesign first.
                      <br />
                      [00:01:45] Jordan: Agreed. We also need to update the database schema.
                      <br />
                      [00:02:00] Alex: When can we have these ready?
                      <br />
                      [00:02:15] Sarah: I can have the designs ready by Friday.
                      <br />
                      [00:02:30] Jordan: And I'll update the schema by Wednesday.
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="summaries" className="p-6 bg-background rounded-lg border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Intelligent Summaries</h3>
                    <p className="text-muted-foreground mb-4">
                      Our AI doesn't just transcribe—it understands the content and creates structured summaries:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Hierarchical summaries with main topics and subtopics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Key decision highlighting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Important quote extraction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Customizable summary length</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Topic categorization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted p-6 rounded-lg border">
                    <h4 className="font-medium mb-2">Example Summary</h4>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium mb-2">Meeting Topic: Q2 Roadmap Planning</p>
                      <p className="mb-4">
                        The team discussed priorities for the Q2 product roadmap, focusing on two main areas: the user
                        dashboard redesign and database schema updates.
                      </p>
                      <p className="font-medium mb-2">Key Decisions:</p>
                      <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>User dashboard redesign will be prioritized first</li>
                        <li>Database schema updates will follow immediately after</li>
                        <li>Sarah will complete designs by Friday</li>
                        <li>Jordan will update the schema by Wednesday</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="action-items" className="p-6 bg-background rounded-lg border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Action Item Tracking</h3>
                    <p className="text-muted-foreground mb-4">
                      Never miss a follow-up item again with our intelligent action item extraction:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Automatic detection of commitments and tasks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Assignment to specific team members</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Due date recognition and tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Status updates and notifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Integration with task management tools</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted p-6 rounded-lg border">
                    <h4 className="font-medium mb-2">Example Action Items</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="p-3 bg-background rounded border">
                        <p className="font-medium">Complete user dashboard redesign</p>
                        <p className="text-xs">Assigned to: Sarah • Due: Friday</p>
                      </div>
                      <div className="p-3 bg-background rounded border">
                        <p className="font-medium">Update database schema</p>
                        <p className="text-xs">Assigned to: Jordan • Due: Wednesday</p>
                      </div>
                      <div className="p-3 bg-background rounded border">
                        <p className="font-medium">Schedule client follow-up meeting</p>
                        <p className="text-xs">Assigned to: Alex • Due: Next week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="p-6 bg-background rounded-lg border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Meeting Analytics</h3>
                    <p className="text-muted-foreground mb-4">
                      Gain insights into your meeting patterns and team collaboration:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Speaking time distribution among participants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Topic frequency analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Sentiment analysis of discussions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Action item completion rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Meeting efficiency metrics</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted p-6 rounded-lg border">
                    <h4 className="font-medium mb-2">Example Analytics</h4>
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium mb-1">Speaking Time Distribution</p>
                        <div className="h-4 w-full bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[35%]"></div>
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                          <span>Alex: 35%</span>
                          <span>Sarah: 25%</span>
                          <span>Jordan: 40%</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Topic Analysis</p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 bg-background rounded text-xs">User Interface: 45%</div>
                          <div className="p-2 bg-background rounded text-xs">Database: 30%</div>
                          <div className="p-2 bg-background rounded text-xs">Timeline: 15%</div>
                          <div className="p-2 bg-background rounded text-xs">Client: 10%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Advanced Capabilities</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Powerful features that take your meeting productivity to the next level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeatures.map((feature, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Integrations</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Connect with your favorite tools for a seamless workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {integrations.map((integration, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{integration.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                    <div className="mt-4">
                      {integration.available ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-500">
                          Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
                Ready to Transform Your Meetings?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of teams who are saving time and boosting productivity with AI Meeting Summarizer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
