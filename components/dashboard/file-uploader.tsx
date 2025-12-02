"use client"



import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, File, X } from "lucide-react"
import { cn } from "@/lib/utils"

// interface FileUploaderProps {
//   onFileSelect: (file: File | null) => void
// }

export function FileUploader({ onFileSelect }) {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      setFile(droppedFile)
      onFileSelect(droppedFile)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)
      onFileSelect(selectedFile)
    }
  }

  const handleRemoveFile = () => {
    setFile(null)
    onFileSelect(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-2">
      {!file ? (
        <div
          className={cn(
            "flex flex-col items-center justify-center rounded-lg border border-dashed p-6 transition-colors",
            isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25",
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="rounded-full bg-primary/10 p-2">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Drag & Drop</h3>
            <p className="text-sm text-muted-foreground">
              Drop your file here, or{" "}
              <span className="cursor-pointer text-primary underline" onClick={() => fileInputRef.current?.click()}>
                browse
              </span>
            </p>
            <p className="text-xs text-muted-foreground">Supports PDF, MP3, MP4, TXT (max 500MB)</p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,.mp3,.mp4,.txt"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-primary/10 p-2">
              <File className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleRemoveFile} className="h-8 w-8">
            <X className="h-4 w-4" />
            <span className="sr-only">Remove file</span>
          </Button>
        </div>
      )}
    </div>
  )
}
