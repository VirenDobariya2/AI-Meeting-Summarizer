"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Calendar,
  CheckCircle,
  XCircle,
  Plus,
  ChevronDown,
  Video,
  Upload,
} from "lucide-react";
import { useRouter } from "next/navigation";

const meetings = [
  {
    id: 1,
    title: "Project Sync-up",
    time: "Nov 22, 2025, 10:00 AM",
    participants: ["Alice", "Bob"],
    status: "Scheduled",
  },
  {
    id: 2,
    title: "Client Meeting",
    time: "Nov 21, 2025, 3:00 PM",
    participants: ["Charlie"],
    status: "Completed",
  },
  {
    id: 3,
    title: "Team Review",
    time: "Nov 22, 2025, 1:00 PM",
    participants: ["Alice", "Bob", "Charlie"],
    status: "Cancelled",
  },
];

export default function MeetingStatusPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState<{ type: string, open: boolean }>({
    type: "",
    open: false,
  });
  const router = useRouter();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
    hover: { scale: 1.03 },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-6"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Meeting Status
        </h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search meetings..."
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <select className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <User className="w-8 h-8 text-gray-700 dark:text-gray-300" />
        </div>
      </motion.header>

      {/* Add Meeting + Capture */}
      <div className="mb-6 flex justify-end relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          <Plus className="w-4 h-4" />  Capture{" "}
          <ChevronDown className="w-4 h-4" />
        </button>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
            >
              {[
                "Add to Live Meeting",
                "Schedule Meeting",
                "Start Recording",
                "Upload Meeting",
              ].map((action) => (
                <button
                  key={action}
                  onClick={() => {
                    if (action === "Upload Meeting") {
                      router.push("/dashboard/upload"); // Redirect to Upload page
                    } else if (action === "Start Recording") {
                      router.push("/dashboard/start-recording"); // Redirect to Start Recording page
                    } else {
                      setModal({ type: action, open: true });
                    }
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {action}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        {[
          {
            title: "Total Meetings",
            value: meetings.length,
            color: "text-gray-900 dark:text-white",
          },
          {
            title: "Completed",
            value: meetings.filter((m) => m.status === "Completed").length,
            color: "text-green-500",
          },
          {
            title: "Pending",
            value: meetings.filter((m) => m.status === "Scheduled").length,
            color: "text-yellow-500",
          },
          {
            title: "Cancelled",
            value: meetings.filter((m) => m.status === "Cancelled").length,
            color: "text-red-500",
          },
        ].map((stat, i) => (
          <motion.div
            key={stat.title}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
          >
            <h2 className="text-gray-500 dark:text-gray-400 text-sm">
              {stat.title}
            </h2>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Meeting Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meetings.map((meeting, i) => (
          <motion.div
            key={meeting.id}
            custom={i}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {meeting.title}
              </h3>
              {meeting.status === "Completed" && (
                <CheckCircle className="text-green-500 w-5 h-5" />
              )}
              {meeting.status === "Cancelled" && (
                <XCircle className="text-red-500 w-5 h-5" />
              )}
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
              <Calendar className="inline w-4 h-4 mr-1" /> {meeting.time}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
              Participants: {meeting.participants.join(", ")}
            </p>
            <div className="flex gap-2 mt-2">
              <button className="px-3 py-1 rounded bg-blue-500 text-white text-sm hover:bg-blue-600 transition">
                Join
              </button>
              <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                View
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modals */}
      <AnimatePresence>
        {modal.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96"
            >
              <button
                onClick={() => setModal({ type: "", open: false })}
                className="mb-4 text-blue-500 hover:underline"
              >
                Back to Home
              </button>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {modal.type}
              </h2>

              {modal.type === "Add to Live Meeting" && (
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Name your meeting (Optional)"
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Meeting link"
                    defaultValue="https://www.dialpad.com/blog/meeting-invite/[invite-code]"
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Meeting language"
                    defaultValue="en"
                    className="border p-2 rounded"
                  />
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Add Meeting
                  </button>
                </div>
              )}

              {modal.type === "Schedule Meeting" && (
                <div className="flex flex-col gap-3">
                  <p>
                    Your AI Notetaker will be invited to the calendar meeting to
                    record, transcribe and summarize.
                  </p>
                  <a
                    href="https://calendar.google.com/calendar/u/0/r/eventedit?add=fred"
                    target="_blank"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-center"
                  >
                    Google Calendar
                  </a>
                  <a
                    href="https://www.microsoft.com/en-gb/microsoft-365/outlook/email-and-calendar-software"
                    target="_blank"
                    className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition text-center"
                  >
                    Microsoft Outlook
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
