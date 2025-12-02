"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Constants
const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

// Context
interface SidebarContextProps {
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
  collapsible: "icon" | "always" | "never"
}
const SidebarContext = React.createContext<SidebarContextProps | undefined>(undefined)

export const useSidebar = () => {
  const context = React.useContext(SidebarContext)
  if (!context) throw new Error("useSidebar must be used within SidebarProvider")
  return context
}

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = React.useState(true)
  const [collapsible] = React.useState<"icon" | "always" | "never">("icon")

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded, collapsible }}>
      {children}
    </SidebarContext.Provider>
  )
}

// Wrapper (outer div)
export const SidebarProviderWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile()

  return (
    <div
      ref={ref}
      style={{
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style,
      } as React.CSSProperties}
      className={cn("group/sidebar-wrapper flex min-h-svh w-full", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarProviderWrapper.displayName = "SidebarProviderWrapper"

// Sidebar shell
const sidebarVariants = cva(
  "relative h-screen border-r bg-sidebar text-sidebar-foreground transition-all duration-300 ease-in-out",
  {
    variants: {
      expanded: {
        true: "w-64",
        false: "w-16",
      },
    },
    defaultVariants: {
      expanded: true,
    },
  }
)

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {}

export const SidebarComponent = ({ className, ...props }: SidebarProps) => {
  const { expanded } = useSidebar()
  return <div className={cn(sidebarVariants({ expanded }), className)} {...props} />
}

// Sidebar Toggle Button
export const SidebarTrigger = () => {
  const { expanded, setExpanded, collapsible } = useSidebar()
  if (collapsible === "never") return null

  return (
    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setExpanded(!expanded)}>
      {expanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
}

// Header
export const SidebarHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { expanded } = useSidebar()
  return (
    <div
      className={cn(
        "flex h-16 items-center border-b px-4",
        expanded ? "justify-between" : "justify-center",
        className
      )}
      {...props}
    />
  )
}

// Content
export const SidebarContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex-1 overflow-auto p-2", className)} {...props} />
)

// Footer
export const SidebarFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("border-t p-2", className)} {...props} />
)

// Menu
export const SidebarMenu = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("space-y-1", className)} {...props} />
)

export const SidebarMenuItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("", className)} {...props} />
)

// Menu Button
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  tooltip?: string
  asChild?: boolean
}

export const SidebarMenuButton = ({
  className,
  isActive,
  tooltip,
  asChild = false,
  ...props
}: SidebarMenuButtonProps) => {
  const { expanded } = useSidebar()
  const Comp = asChild ? Slot : "button"

  const button = (
    <Comp
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
        !expanded && "justify-center px-0",
        className
      )}
      {...props}
    />
  )

  if (!expanded && tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{button}</TooltipTrigger>
          <TooltipContent side="right">{tooltip}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return button
}

// Wrapper with Mobile Sheet
export const SidebarWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { expanded, setExpanded } = useSidebar()
  const isMobile = useIsMobile()

  if (collapsible === "none") {
    return (
      <div className={cn("flex h-full w-[--sidebar-width] flex-col", className)} ref={ref} {...props}>
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={expanded} onOpenChange={setExpanded}>
        <SheetContent
          side={side}
          className="w-[--sidebar-width] p-0 [&>button]:hidden"
          style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE } as React.CSSProperties}
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      ref={ref}
      className="group peer hidden h-screen md:block"
      data-state={expanded ? "expanded" : "collapsed"}
      data-collapsible={expanded ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      <div
        className={cn(
          "transition-[width] duration-200 ease-linear bg-transparent w-[--sidebar-width]",
          collapsible === "icon" && "w-[--sidebar-width-icon]"
        )}
      />
      <div className={cn("absolute inset-0 flex flex-col bg-sidebar text-sidebar-foreground", className)}>
        {children}
      </div>
    </div>
  )
})
SidebarWrapper.displayName = "SidebarWrapper"
