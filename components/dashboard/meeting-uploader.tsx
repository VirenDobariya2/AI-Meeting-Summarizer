"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, FileUp, X, Loader2 } from "lucide-react"

export function MeetingUploader() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      setFile(droppedFile)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleRemoveFile = () => {
    setFile(null)
    setUploadProgress(0)
  }

  const handleUpload = () => {
    if (!file) return

    setIsUploading(true)

    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      setUploadProgress(progress)

      if (progress >= 100) {
        clearInterval(interval)
        // Here you would typically make an API call to process the file
        setIsUploading(false)
      }
    }, 200)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Meeting Recording</CardTitle>
        <CardDescription>Drag and drop or select a meeting recording file to upload</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div
          className={`relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center transition-colors ${
            isDragging ? "border-primary" : "border-muted-foreground/25"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {!file ? (
            <>
              <FileUp className="mb-4 h-10 w-10 text-muted-foreground" />
              <h3 className="mb-2 text-lg font-semibold">Drag & drop or click to upload</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Supports MP3, MP4, WAV, M4A, and other audio/video formats
              </p>
              <Input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="audio/*,video/*"
              />
              <Button asChild>
                <Label htmlFor="file-upload">Select File</Label>
              </Button>
            </>
          ) : (
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileUp className="h-6 w-6 text-muted-foreground" />
                  <div className="text-left">
                    <p className="font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={handleRemoveFile} disabled={isUploading}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove file</span>
                </Button>
              </div>

              {isUploading && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Uploading...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} />
                </div>
              )}

              <div className="flex gap-2">
                <Button onClick={handleUpload} disabled={isUploading} className="w-full gap-2">
                  {isUploading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4" />
                      Upload and Process
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="rounded-lg border bg-muted/40 p-4">
          <h3 className="mb-2 font-semibold">Meeting Options</h3>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="meeting-title">Meeting Title</Label>
              <Input id="meeting-title" placeholder="Enter meeting title" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="meeting-date">Meeting Date</Label>
                <Input id="meeting-date" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="participants">Participants (optional)</Label>
                <Input id="participants" placeholder="Enter email addresses" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
