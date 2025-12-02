"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Sparkles, Calendar, MoreVertical, Check } from "lucide-react";

// --- Types ---

type Priority = "low" | "medium" | "high";
type ColumnId = "todo" | "inProgress" | "completed";

interface Task {
  id: number;
  title: string;
  meeting: string;
  priority: Priority;
  dueDate: string; // ISO-ish string (e.g., "YYYY-MM-DD")
  assignee: string;
  avatarColor: string; // Tailwind color class (e.g., bg-blue-600/70)
}

type Columns = {
  [key in ColumnId]: Task[];
};

// --- Initial Data ---

const initialTasks: Columns = {
  todo: [
    {
      id: 1,
      title: "Review Q4 budget allocation",
      meeting: "Finance Review",
      priority: "high",
      dueDate: "2025-11-20",
      assignee: "SK",
      avatarColor: "bg-blue-600/70"
    },
    {
      id: 2,
      title: "Update marketing campaign copy",
      meeting: "Marketing Sync",
      priority: "medium",
      dueDate: "2025-11-22",
      assignee: "JD",
      avatarColor: "bg-purple-600/70"
    },
    {
      id: 3,
      title: "Schedule customer interviews",
      meeting: "Product Planning",
      priority: "low",
      dueDate: "2025-11-25",
      assignee: "AM",
      avatarColor: "bg-pink-600/70"
    }
  ],
  inProgress: [
    {
      id: 4,
      title: "Implement new API endpoints",
      meeting: "Engineering Sprint",
      priority: "high",
      dueDate: "2025-11-19",
      assignee: "TC",
      avatarColor: "bg-emerald-600/70"
    },
    {
      id: 5,
      title: "Design mobile app mockups",
      meeting: "Design Review",
      priority: "medium",
      dueDate: "2025-11-21",
      assignee: "ER",
      avatarColor: "bg-indigo-600/70"
    }
  ],
  completed: [
    {
      id: 6,
      title: "Send follow-up emails to leads",
      meeting: "Sales Team Meeting",
      priority: "medium",
      dueDate: "2025-11-18",
      assignee: "MK",
      avatarColor: "bg-teal-600/70"
    },
    {
      id: 7,
      title: "Update documentation",
      meeting: "Developer Sync",
      priority: "low",
      dueDate: "2025-11-17",
      assignee: "LP",
      avatarColor: "bg-orange-500/70"
    }
  ]
};

const aiSuggestions = [
    { id: 1, title: "Follow up on outstanding client proposals", source: "Sales Meeting" },
    { id: 2, title: "Review code changes from last sprint", source: "Engineering Review" },
    { id: 3, title: "Schedule team building event", source: "HR Update" }
];

const columnsMeta: { id: ColumnId, title: string, colorClass: string, dotColor: string }[] = [
    { id: "todo", title: "To Do", colorClass: "text-gray-600", dotColor: "bg-gray-500" },
    { id: "inProgress", title: "In Progress", colorClass: "text-blue-600", dotColor: "bg-blue-600" },
    { id: "completed", title: "Completed", colorClass: "text-emerald-600", dotColor: "bg-emerald-600" }
];

// --- Utility Components ---

const PriorityBadge: React.FC<{ priority: Priority }> = ({ priority }) => {
  const baseClasses = "px-2 py-0.5 rounded-md text-xs font-medium";
  let classes = "";

  switch (priority) {
    case "high":
      classes = "bg-red-100/50 text-red-700 border border-red-200";
      break;
    case "medium":
      classes = "bg-amber-100/50 text-amber-700 border border-amber-200";
      break;
    case "low":
      classes = "bg-emerald-100/50 text-emerald-700 border border-emerald-200";
      break;
  }
  return <div className={`${baseClasses} ${classes}`}>{priority}</div>;
};

// --- Main Component ---

export default function ActionItems(): React.ReactElement {
  const [tasks, setTasks] = useState<Columns>(initialTasks);
  const [showAdd, setShowAdd] = useState(false);
  const [newTask, setNewTask] = useState<Partial<Task>>({});
  const [nextId, setNextId] = useState<number>(8);

  const totalCount = tasks.todo.length + tasks.inProgress.length + tasks.completed.length;

  // Function to move a task between columns
  function moveTask(taskId: number, from: ColumnId, to: ColumnId) {
    if (from === to) return;
    setTasks((prev) => {
      const copy = { ...prev };
      const idx = copy[from].findIndex((t) => t.id === taskId);
      if (idx === -1) return prev;
      const [task] = copy[from].splice(idx, 1);
      
      return {
        ...copy,
        [from]: copy[from],
        [to]: [task, ...copy[to]]
      };
    });
  }

  // Function to toggle a task's completion status (moves to/from completed)
  function toggleComplete(taskId: number, currentColumn: ColumnId) {
    if (currentColumn === "completed") {
      moveTask(taskId, "completed", "todo");
    } else {
      moveTask(taskId, currentColumn, "completed");
    }
  }

  // Function to handle the form submission for a new task
  function handleAddTaskSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!newTask.title || !newTask.meeting) return alert("Title and Meeting required");
    
    // Simple logic to set a random avatar color if none is provided
    const defaultColors = ["bg-blue-600/70", "bg-purple-600/70", "bg-pink-600/70"];
    const randomColor = defaultColors[Math.floor(Math.random() * defaultColors.length)];

    const task: Task = {
      id: nextId,
      title: String(newTask.title),
      meeting: String(newTask.meeting),
      priority: (newTask.priority as Priority) || "low",
      dueDate: newTask.dueDate || new Date().toISOString().slice(0, 10),
      assignee: newTask.assignee?.toUpperCase() || "ME",
      avatarColor: (newTask.avatarColor as string) || randomColor
    };
    setTasks((p) => ({ ...p, todo: [task, ...p.todo] }));
    setNextId((id) => id + 1);
    setNewTask({});
    setShowAdd(false);
  }

  // --- JSX Rendering ---
  
  return (
    <div className="p-6 max-w-7xl mx-auto font-sans bg-gray-50/50 min-h-screen">
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Action Items</h1>
          <p className="mt-1 text-gray-500">Track and manage your meeting action items</p>
        </div>

        <div className="flex gap-2">
          {/* AI Quick Suggest Button */}
          <motion.button
            onClick={() => alert("AI Quick Suggest clicked")}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-purple-200 bg-white cursor-pointer transition duration-150 ease-in-out shadow-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Sparkles size={16} className="text-purple-600" />
            <span className="text-purple-700 font-semibold text-sm">AI Quick Suggest</span>
          </motion.button>

          {/* Add Task Button */}
          <motion.button
            onClick={() => setShowAdd((s) => !s)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border-none bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white cursor-pointer shadow-lg shadow-purple-500/20 transition duration-150 ease-in-out"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Plus size={16} />
            <span className="font-semibold text-sm">Add Task</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Main Layout: Kanban + Sidebar */}
      <div className="flex gap-4">
        
        {/* Kanban area (3/4 width) */}
        <div className="flex-[3] flex gap-4 min-w-0">
          {columnsMeta.map((col, colIndex) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: colIndex * 0.08 }}
              className="flex flex-col gap-4 flex-1 min-w-0"
            >
              {/* Column header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${col.dotColor}`} />
                  <div className="text-sm text-gray-900 font-bold">{col.title}</div>
                  <div className="bg-purple-100 rounded-lg px-2 py-0.5 text-xs text-purple-600 font-semibold">
                    {tasks[col.id].length}
                  </div>
                </div>
              </div>

              {/* Tasks List */}
              <div className="flex flex-col gap-3">
                {tasks[col.id].map((task, idx) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: colIndex * 0.08 + idx * 0.03 }}
                    className="p-3 rounded-xl bg-white shadow-md border border-gray-100 transition duration-200 ease-in-out hover:shadow-lg"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex gap-2 items-start flex-1 min-w-0">
                        <input
                          type="checkbox"
                          checked={col.id === "completed"}
                          onChange={() => toggleComplete(task.id, col.id)}
                          className="w-4 h-4 mt-1 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                        />
                        <div className="flex flex-col gap-1 min-w-0">
                          <div className={`text-sm font-medium truncate ${col.id === "completed" ? "text-gray-500 line-through" : "text-gray-900"}`}>
                            {task.title}
                          </div>
                          <div className="text-xs text-gray-500">
                            From: {task.meeting}
                          </div>
                        </div>
                      </div>

                      <button
                        className="bg-transparent border-none opacity-70 hover:opacity-100 cursor-pointer transition duration-150 p-1"
                        onClick={() => alert(`More for "${task.title}"`)}
                        title="More"
                      >
                        <MoreVertical size={16} />
                      </button>
                    </div>

                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-50/50">
                      <div className="flex items-center gap-2">
                        <PriorityBadge priority={task.priority} />

                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar size={14} />
                          <span className="font-medium">{task.dueDate}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Move controls (small buttons) */}
                        <div className="flex gap-1.5 text-xs text-gray-600 font-semibold">
                          {col.id !== "todo" && (
                            <button
                              onClick={() => moveTask(task.id, col.id, "todo")}
                              className="px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-100 transition"
                              title="Move to To Do"
                            >
                              To Do
                            </button>
                          )}
                          {col.id !== "inProgress" && (
                            <button
                              onClick={() => moveTask(task.id, col.id, "inProgress")}
                              className="px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-100 transition"
                              title="Move to In Progress"
                            >
                              In Prog
                            </button>
                          )}
                        </div>

                        {/* Assignee Avatar */}
                        <div
                          title={task.assignee}
                          className={`w-8 h-8 rounded-full ${task.avatarColor} flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                        >
                          {task.assignee}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Add placeholder button inside each column */}
                <button
                  onClick={() => {
                    setShowAdd(true);
                    setNewTask({ ...newTask, priority: "low" });
                  }}
                  className="p-3 rounded-xl border-2 border-dashed border-gray-200 bg-transparent cursor-pointer text-gray-500 text-sm hover:bg-gray-50 transition"
                >
                  + Add Task
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right column: AI suggestions + quick stats (1/4 width) */}
        <div className="flex-1 flex flex-col gap-4 min-w-[250px]">
          
          {/* AI Suggestions Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18 }}
            className="p-4 rounded-xl bg-white shadow-lg border border-purple-50/50"
          >
            <div className="flex items-center gap-2 mb-3 text-purple-600">
              <Sparkles size={18} />
              <div className="font-bold text-gray-800">AI Suggestions</div>
            </div>

            <div className="flex flex-col gap-2">
              {aiSuggestions.map((s) => (
                <div key={s.id} className="p-2 rounded-lg bg-gray-50 border border-gray-100 hover:bg-purple-50/50 cursor-pointer transition">
                  <div className="text-sm font-semibold text-gray-800">{s.title}</div>
                  <div className="text-xs text-gray-500">From: {s.source}</div>
                </div>
              ))}
            </div>

            <motion.button
              onClick={() => alert("Generate more suggestions")}
              className="mt-3 w-full px-3 py-2 rounded-lg border border-purple-200 bg-transparent cursor-pointer font-bold text-purple-700 transition hover:bg-purple-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Generate More
            </motion.button>
          </motion.div>

          {/* Quick Stats Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22 }}
            className="p-4 rounded-xl bg-white shadow-md border border-gray-50/50"
          >
            <div className="text-md font-bold mb-3 text-gray-800">Quick Stats</div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-gray-600 text-sm">
                <div>Total Tasks</div>
                <div className="font-semibold text-gray-800">{totalCount}</div>
              </div>

              <div className="flex justify-between text-gray-600 text-sm">
                <div>Completion Rate</div>
                <div className="text-emerald-600 font-bold">
                  {Math.round((tasks.completed.length / Math.max(1, totalCount)) * 100)}%
                </div>
              </div>

              <div className="flex justify-between text-gray-600 text-sm">
                <div>High Priority</div>
                <div className="text-red-600 font-bold">
                  {[...tasks.todo, ...tasks.inProgress, ...tasks.completed].filter(t => t.priority === "high").length}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add Task Panel (Form Modal-ish) */}
      {showAdd && (
        <motion.form
          onSubmit={handleAddTaskSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 p-4 rounded-xl bg-white shadow-2xl border border-gray-100 w-full"
        >
          <h3 className="text-lg font-bold mb-3 text-gray-800">Add New Action Item</h3>
          <div className="flex gap-3 items-center mb-3">
            <input
              placeholder="Title"
              value={newTask.title ?? ""}
              onChange={(e) => setNewTask((s) => ({ ...s, title: e.target.value }))}
              className="flex-2 p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              placeholder="Meeting Source"
              value={newTask.meeting ?? ""}
              onChange={(e) => setNewTask((s) => ({ ...s, meeting: e.target.value }))}
              className="flex-1 p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="date"
              value={newTask.dueDate ?? ""}
              onChange={(e) => setNewTask((s) => ({ ...s, dueDate: e.target.value }))}
              className="p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>

          <div className="flex gap-3 items-center mb-4">
            <select
              value={newTask.priority ?? "low"}
              onChange={(e) => setNewTask((s) => ({ ...s, priority: e.target.value as Priority }))}
              className="p-2 rounded-lg border border-gray-200 text-gray-700"
            >
              <option value="low">Priority: Low</option>
              <option value="medium">Priority: Medium</option>
              <option value="high">Priority: High</option>
            </select>

            <input
              placeholder="Assignee Initials (e.g., JD)"
              value={newTask.assignee ?? ""}
              onChange={(e) => setNewTask((s) => ({ ...s, assignee: e.target.value }))}
              className="p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-1/4"
            />
            
            <input
              placeholder="Avatar color (e.g., bg-red-500/70)"
              value={newTask.avatarColor ?? ""}
              onChange={(e) => setNewTask((s) => ({ ...s, avatarColor: e.target.value }))}
              className="p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-1/4"
            />
          </div>

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={() => { setShowAdd(false); setNewTask({}); }}
              className="px-3 py-2 rounded-lg bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-none cursor-pointer font-semibold transition"
            >
              Add Task
            </motion.button>
          </div>
        </motion.form>
      )}
    </div>
  );
}