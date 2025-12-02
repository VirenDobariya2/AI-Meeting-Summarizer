import type { Metadata } from "next"
import { Navbar } from "@/components/home/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Documentation | AI Meeting Summarizer",
  description: "Learn how to use AI Meeting Summarizer effectively",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                AI Meeting Summarizer
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Documentation
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to know to get the most out of AI Meeting Summarizer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#getting-started">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#api-reference">API Reference</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Documentation Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-20">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Getting Started</h3>
                      <ul className="space-y-1">
                        <li>
                          <Link href="#introduction" className="text-sm text-muted-foreground hover:text-primary">
                            Introduction
                          </Link>
                        </li>
                        <li>
                          <Link href="#quick-start" className="text-sm text-muted-foreground hover:text-primary">
                            Quick Start Guide
                          </Link>
                        </li>
                        <li>
                          <Link href="#uploading" className="text-sm text-muted-foreground hover:text-primary">
                            Uploading Recordings
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Core Features</h3>
                      <ul className="space-y-1">
                        <li>
                          <Link href="#transcription" className="text-sm text-muted-foreground hover:text-primary">
                            Transcription
                          </Link>
                        </li>
                        <li>
                          <Link href="#summaries" className="text-sm text-muted-foreground hover:text-primary">
                            Summaries
                          </Link>
                        </li>
                        <li>
                          <Link href="#action-items" className="text-sm text-muted-foreground hover:text-primary">
                            Action Items
                          </Link>
                        </li>
                        <li>
                          <Link href="#email-generation" className="text-sm text-muted-foreground hover:text-primary">
                            Email Generation
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Advanced</h3>
                      <ul className="space-y-1">
                        <li>
                          <Link href="#integrations" className="text-sm text-muted-foreground hover:text-primary">
                            Integrations
                          </Link>
                        </li>
                        <li>
                          <Link href="#api-reference" className="text-sm text-muted-foreground hover:text-primary">
                            API Reference
                          </Link>
                        </li>
                        <li>
                          <Link href="#team-management" className="text-sm text-muted-foreground hover:text-primary">
                            Team Management
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Resources</h3>
                      <ul className="space-y-1">
                        <li>
                          <Link href="#faq" className="text-sm text-muted-foreground hover:text-primary">
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link href="#troubleshooting" className="text-sm text-muted-foreground hover:text-primary">
                            Troubleshooting
                          </Link>
                        </li>
                        <li>
                          <Link href="#changelog" className="text-sm text-muted-foreground hover:text-primary">
                            Changelog
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-12">
                {/* Introduction */}
                <section id="introduction">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Introduction</h2>
                  <p className="text-muted-foreground mb-4">
                    AI Meeting Summarizer is a powerful tool that helps teams save time and improve productivity by
                    automatically transcribing, summarizing, and extracting action items from meeting recordings.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our platform uses advanced AI models to process audio and video recordings, providing accurate
                    transcripts, concise summaries, and actionable insights from your meetings.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Save Time</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Reduce time spent on meeting notes and follow-ups by up to 80%.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Improve Accountability</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Never miss action items or commitments with automatic tracking.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Enhance Collaboration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Share meeting insights with your team for better alignment.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Quick Start Guide */}
                <section id="quick-start">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Quick Start Guide</h2>
                  <p className="text-muted-foreground mb-6">
                    Get up and running with AI Meeting Summarizer in just a few simple steps:
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        1
                      </div>
                      <div>
                        <h3 className="font-medium">Create an account</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Sign up for a free account at{" "}
                          <Link href="/signup" className="text-primary hover:underline">
                            aimeetingsummarizer.com/signup
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        2
                      </div>
                      <div>
                        <h3 className="font-medium">Upload a meeting recording</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Navigate to the dashboard and click "Upload Meeting" to upload your first recording
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        3
                      </div>
                      <div>
                        <h3 className="font-medium">Review the results</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Once processing is complete, review the transcript, summary, and action items
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        4
                      </div>
                      <div>
                        <h3 className="font-medium">Share with your team</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Generate follow-up emails or share the summary directly with your team members
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/dashboard">
                        Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </section>

                {/* Uploading Recordings */}
                <section id="uploading">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Uploading Recordings</h2>
                  <p className="text-muted-foreground mb-6">
                    AI Meeting Summarizer supports a variety of audio and video formats for your meeting recordings.
                  </p>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Supported File Formats</CardTitle>
                      <CardDescription>We support most common audio and video formats</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div className="p-2 bg-muted rounded text-center">MP3</div>
                        <div className="p-2 bg-muted rounded text-center">MP4</div>
                        <div className="p-2 bg-muted rounded text-center">WAV</div>
                        <div className="p-2 bg-muted rounded text-center">M4A</div>
                        <div className="p-2 bg-muted rounded text-center">AAC</div>
                        <div className="p-2 bg-muted rounded text-center">WMA</div>
                        <div className="p-2 bg-muted rounded text-center">FLAC</div>
                        <div className="p-2 bg-muted rounded text-center">OGG</div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3 className="text-xl font-bold mb-4">Upload Methods</h3>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Direct Upload</h4>
                      <p className="text-sm text-muted-foreground">
                        Drag and drop files directly into the upload area or use the file browser to select files from
                        your device.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Integration Upload</h4>
                      <p className="text-sm text-muted-foreground">
                        Connect with Zoom, Google Meet, or Microsoft Teams to automatically import recordings.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">API Upload</h4>
                      <p className="text-sm text-muted-foreground">
                        Use our API to programmatically upload recordings from your applications.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-6 mb-4">Best Practices</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">
                        For best results, use recordings with clear audio and minimal background noise
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">
                        Add meeting title and participant information for more accurate summaries
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">
                        For long meetings, consider breaking recordings into smaller segments
                      </span>
                    </li>
                  </ul>
                </section>

                {/* Transcription */}
                <section id="transcription">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Transcription</h2>
                  <p className="text-muted-foreground mb-6">
                    Our AI-powered transcription engine converts speech to text with exceptional accuracy, even in
                    challenging conditions.
                  </p>

                  <Tabs defaultValue="features" className="mb-6">
                    <TabsList>
                      <TabsTrigger value="features">Features</TabsTrigger>
                      <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
                      <TabsTrigger value="editing">Editing</TabsTrigger>
                    </TabsList>
                    <TabsContent value="features" className="p-4 border rounded-lg mt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">Speaker identification and labeling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">Timestamps for easy navigation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">Support for technical terminology</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">Multi-language support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">Background noise filtering</span>
                        </li>
                      </ul>
                    </TabsContent>
                    <TabsContent value="accuracy" className="p-4 border rounded-lg mt-4">
                      <p className="text-muted-foreground mb-4">
                        Our transcription engine achieves over 95% accuracy for clear audio in English. Accuracy may
                        vary based on:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">Audio quality and background noise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">Speaker accents and dialects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">Technical or domain-specific terminology</span>
                        </li>
                      </ul>
                    </TabsContent>
                    <TabsContent value="editing" className="p-4 border rounded-lg mt-4">
                      <p className="text-muted-foreground mb-4">
                        You can edit transcripts to correct any inaccuracies:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">Edit text directly in the transcript view</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">Correct speaker labels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">Add or remove timestamps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">
                            Regenerate summaries and action items after editing
                          </span>
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                </section>

                {/* Summaries */}
                <section id="summaries">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Summaries</h2>
                  <p className="text-muted-foreground mb-6">
                    Our AI doesn't just transcribe—it understands the content and creates structured summaries of your
                    meetings.
                  </p>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Summary Types</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-medium mb-2">Executive Summary</h4>
                          <p className="text-sm text-muted-foreground">
                            A brief overview of the key points discussed in the meeting, ideal for executives and
                            stakeholders who need a quick understanding.
                          </p>
                        </div>
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-medium mb-2">Detailed Summary</h4>
                          <p className="text-sm text-muted-foreground">
                            A comprehensive summary that covers all major topics discussed, with more detail than the
                            executive summary.
                          </p>
                        </div>
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-medium mb-2">Topic-based Summary</h4>
                          <p className="text-sm text-muted-foreground">
                            A summary organized by topics discussed, making it easy to find information on specific
                            subjects.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3 className="text-xl font-bold mb-4">Customizing Summaries</h3>
                  <p className="text-muted-foreground mb-4">
                    You can customize how summaries are generated to better suit your needs:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">Adjust summary length (brief, standard, detailed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">Focus on specific topics or keywords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">
                        Include or exclude certain sections (introductions, small talk, etc.)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">
                        Set custom templates for different meeting types (standup, client call, etc.)
                      </span>
                    </li>
                  </ul>
                </section>

                {/* Action Items */}
                <section id="action-items">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Action Items</h2>
                  <p className="text-muted-foreground mb-6">
                    Never miss a follow-up item again with our intelligent action item extraction.
                  </p>

                  <h3 className="text-xl font-bold mb-4">How It Works</h3>
                  <p className="text-muted-foreground mb-4">
                    Our AI identifies commitments, tasks, and deadlines mentioned during meetings:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">
                        Detects action phrases like "I'll take care of," "We need to," etc.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">
                        Identifies who is responsible based on speaker and context
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">Extracts deadlines and due dates when mentioned</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">
                        Creates structured, trackable action items from these elements
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mb-4">Managing Action Items</h3>
                  <p className="text-muted-foreground mb-4">
                    Once action items are extracted, you can manage them in several ways:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Track Progress</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Mark action items as in progress, completed, or blocked
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Assign & Reassign</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Assign action items to team members or reassign as needed
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Set Deadlines</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Add or modify due dates and set reminders</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Export & Integrate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Export to task management tools or include in follow-up emails
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Email Generation */}
                <section id="email-generation">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Email Generation</h2>
                  <p className="text-muted-foreground mb-6">
                    Create professional follow-up emails with just one click based on meeting content and action items.
                  </p>

                  <h3 className="text-xl font-bold mb-4">Email Templates</h3>
                  <p className="text-muted-foreground mb-4">
                    Choose from several pre-built templates or create your own:
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Standard Follow-up</h4>
                      <p className="text-sm text-muted-foreground">
                        A comprehensive email with meeting summary and all action items
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Action Items Only</h4>
                      <p className="text-sm text-muted-foreground">
                        A focused email listing only the action items and who's responsible
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Executive Summary</h4>
                      <p className="text-sm text-muted-foreground">
                        A brief email with key points and decisions, ideal for executives
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Custom Template</h4>
                      <p className="text-sm text-muted-foreground">
                        Create your own templates with custom sections and formatting
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Customization Options</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">Edit email content before sending</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">Add custom introduction and conclusion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">Include or exclude specific sections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">
                        Adjust tone (formal, casual, friendly, professional)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">Add company branding and signature</span>
                    </li>
                  </ul>
                </section>

                {/* API Reference */}
                <section id="api-reference">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">API Reference</h2>
                  <p className="text-muted-foreground mb-6">
                    Integrate AI Meeting Summarizer into your own applications with our comprehensive API.
                  </p>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>API Overview</CardTitle>
                      <CardDescription>
                        Our RESTful API allows you to programmatically access all features of AI Meeting Summarizer
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Base URL: <code className="bg-muted p-1 rounded">https://api.aimeetingsummarizer.com/v1</code>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Authentication: API keys are required for all endpoints. You can generate API keys in your
                        account settings.
                      </p>
                    </CardContent>
                  </Card>

                  <h3 className="text-xl font-bold mb-4">Key Endpoints</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="upload">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          <span>Upload Recordings</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="p-4 bg-muted rounded-lg font-mono text-sm">
                          <p>POST /recordings/upload</p>
                          <p className="mt-2">Request Body:</p>
                          <pre className="mt-1 p-2 bg-background rounded">
                            {`{
  "file": [binary data],
  "title": "Meeting Title",
  "participants": ["John Doe", "Jane Smith"],
  "date": "2023-05-15T10:00:00Z"
}`}
                          </pre>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="transcribe">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          <span>Transcribe Recording</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="p-4 bg-muted rounded-lg font-mono text-sm">
                          <p>POST /recordings/{"{recording_id}"}/transcribe</p>
                          <p className="mt-2">Request Body:</p>
                          <pre className="mt-1 p-2 bg-background rounded">
                            {`{
  "language": "en-US",
  "speaker_detection": true,
  "timestamps": true
}`}
                          </pre>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="summarize">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          <span>Generate Summary</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="p-4 bg-muted rounded-lg font-mono text-sm">
                          <p>POST /recordings/{"{recording_id}"}/summarize</p>
                          <p className="mt-2">Request Body:</p>
                          <pre className="mt-1 p-2 bg-background rounded">
                            {`{
  "summary_type": "detailed",
  "length": "standard",
  "focus_topics": ["feature requests", "timeline"]
}`}
                          </pre>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="action-items">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          <span>Extract Action Items</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="p-4 bg-muted rounded-lg font-mono text-sm">
                          <p>POST /recordings/{"{recording_id}"}/action-items</p>
                          <p className="mt-2">Request Body:</p>
                          <pre className="mt-1 p-2 bg-background rounded">
                            {`{
  "include_assignees": true,
  "include_deadlines": true
}`}
                          </pre>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/docs/api">
                        View Full API Documentation <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="accuracy">
                      <AccordionTrigger>How accurate is the transcription?</AccordionTrigger>
                      <AccordionContent>
                        Our AI-powered transcription has an accuracy rate of over 95% for clear audio in English.
                        Accuracy may vary based on audio quality, accents, and background noise. We continuously train
                        our models to improve accuracy across different scenarios.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="formats">
                      <AccordionTrigger>What file formats are supported?</AccordionTrigger>
                      <AccordionContent>
                        We support most common audio and video formats including MP3, MP4, WAV, M4A, AAC, WMA, FLAC, and
                        OGG. The maximum file size is 2GB for Pro plans and 5GB for Business and Enterprise plans.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="languages">
                      <AccordionTrigger>What languages are supported?</AccordionTrigger>
                      <AccordionContent>
                        Our transcription service supports over 30 languages including English, Spanish, French, German,
                        Japanese, Chinese, and more. Summarization is available in English, Spanish, French, and German,
                        with more languages being added regularly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="security">
                      <AccordionTrigger>How is my data protected?</AccordionTrigger>
                      <AccordionContent>
                        We take data security seriously. All uploaded files and generated content are encrypted both in
                        transit and at rest. We do not share your data with third parties. Enterprise plans include
                        additional security features like custom data retention policies and GDPR compliance tools.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="integrations">
                      <AccordionTrigger>What integrations are available?</AccordionTrigger>
                      <AccordionContent>
                        We integrate with popular tools like Slack, Microsoft Teams, Google Calendar, Zoom, Asana, Jira,
                        Notion, and Trello. Business and Enterprise plans include access to our API for custom
                        integrations with your own systems.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="trial">
                      <AccordionTrigger>How does the free trial work?</AccordionTrigger>
                      <AccordionContent>
                        Our free trial gives you full access to the Pro plan features for 14 days. No credit card is
                        required to start. At the end of your trial, you can choose to upgrade to a paid plan or
                        downgrade to the Free plan.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Try AI Meeting Summarizer free for 14 days. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
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
