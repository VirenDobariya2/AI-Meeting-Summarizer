  "use client"
  
  import React from 'react';
  import { 
    LayoutDashboard, 
    Users, 
    BarChart3, 
    CreditCard, 
    Users2, 
    FileText, 
    Key, 
    Settings,
    Bell,
    Activity
  } from 'lucide-react';
  
  interface NavItem {
    title: string;
    icon: React.ElementType;
    path: string;
  }
  
  const navItems: NavItem[] = [
    { title: 'Dashboard', icon: LayoutDashboard, path: 'dashboard' },
    { title: 'Users', icon: Users, path: 'users' },
    { title: 'Analytics', icon: BarChart3, path: 'analytics' },
    { title: 'Subscriptions', icon: CreditCard, path: 'subscriptions' },
    { title: 'Team', icon: Users2, path: 'team' },
    { title: 'Notifications', icon: Bell, path: 'notifications' },
    { title: 'System Health', icon: Activity, path: 'system-health' },
    { title: 'Activity Logs', icon: FileText, path: 'activity-logs' },
    { title: 'API Keys', icon: Key, path: 'api-keys' },
    { title: 'Settings', icon: Settings, path: 'settings' },
  ];
  
  interface SidebarProps {
    currentPage: string;
    onNavigate: (page: string) => void;
  }
  
  export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
    return (
      <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 flex flex-col">
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg"></div>
            <span className="text-gray-900">Admin Panel</span>
          </div>
        </div>
  
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.title}</span>
              </button>
            );
          })}
        </nav>
  
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white">
              SA
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-900 truncate">Sarah Anderson</p>
              <p className="text-gray-500 truncate">Admin</p>
            </div>
          </div>
        </div>
      </div>
    );
  }