"use client";
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, TrendingUp } from "lucide-react";

export function InteractiveDashboard() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Your Command Center
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to stay on top of your meetings
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Dashboard Card */}
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-[32px] shadow-2xl p-8 md:p-12">
            {/* Top Row - Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Calendar, label: "Meetings This Week", value: "12", gradient: "from-blue-500 to-cyan-500" },
                { icon: Clock, label: "Time Saved", value: "8.5h", gradient: "from-violet-500 to-purple-600" },
                { icon: Users, label: "Team Members", value: "24", gradient: "from-emerald-500 to-teal-600" },
                { icon: TrendingUp, label: "Productivity", value: "+32%", gradient: "from-pink-500 to-rose-600" },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Meetings List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="mb-4">Recent Meetings</h3>
              
              {[
                { title: "Product Strategy Q1", time: "2 hours ago", status: "Completed", color: "green" },
                { title: "Design Review", time: "5 hours ago", status: "Completed", color: "green" },
                { title: "Client Presentation", time: "Yesterday", status: "Completed", color: "green" },
              ].map((meeting, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-4 bg-gradient-to-r from-gray-50 to-white border border-gray-200/50 rounded-xl hover:border-gray-300 transition-all duration-300 hover:shadow-md flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full bg-${meeting.color}-500`} />
                    <div>
                      <div className="text-gray-900">{meeting.title}</div>
                      <div className="text-sm text-gray-500">{meeting.time}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full bg-${meeting.color}-100 text-${meeting.color}-700 text-sm`}>
                    {meeting.status}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -5 }}
            whileInView={{ opacity: 1, y: -20, rotate: -3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -left-10 hidden lg:block"
          >
            <div className="w-64 p-6 bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl shadow-2xl text-white">
              <div className="text-sm opacity-80 mb-2">Next Action Item</div>
              <div>Follow up with design team</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 5 }}
            whileInView={{ opacity: 1, y: -20, rotate: 3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-10 hidden lg:block"
          >
            <div className="w-64 p-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-2xl text-white">
              <div className="text-sm opacity-80 mb-2">AI Summary Ready</div>
              <div>Q1 Planning Meeting</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
