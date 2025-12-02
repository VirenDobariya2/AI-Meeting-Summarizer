"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Key, CreditCard, Plug, Copy, Check, Badge } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [copied, setCopied] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'api', label: 'API Keys', icon: Key },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'integrations', label: 'Connected Apps', icon: Plug },
  ];

  const handleCopyApiKey = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl text-gray-900 dark:text-white mb-2">Account & Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account, security, and billing preferences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Sidebar Tabs */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all text-sm ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-400'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </Card>
          </motion.div>

          {/* Content Area */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl text-gray-900 dark:text-white mb-6">Profile Information</h2>
                  
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl">
                      JD
                    </div>
                    <div>
                      <Button variant="outline" size="sm">Change Avatar</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-700 dark:text-gray-300">First Name</label>
                        <Input defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-700 dark:text-gray-300">Last Name</label>
                        <Input defaultValue="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
                      <Input type="email" defaultValue="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 dark:text-gray-300">Company</label>
                      <Input defaultValue="Acme Inc." />
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
                      Save Changes
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl text-gray-900 dark:text-white mb-6">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm text-gray-900 dark:text-white mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm text-gray-700 dark:text-gray-300">Current Password</label>
                          <Input type="password" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-700 dark:text-gray-300">New Password</label>
                          <Input type="password" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-700 dark:text-gray-300">Confirm New Password</label>
                          <Input type="password" />
                        </div>
                      </div>
                      <Button className="mt-4" variant="outline">Update Password</Button>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm text-gray-900 dark:text-white mb-1">Two-Factor Authentication</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch 
                          checked={twoFactorEnabled}
                          onCheckedChange={setTwoFactorEnabled}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'api' && (
              <div className="space-y-6">
                <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl text-gray-900 dark:text-white mb-6">API Keys</h2>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Use API keys to integrate MemoMeet with your applications
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Input 
                          value="mk_live_sk_1234567890abcdef" 
                          readOnly 
                          className="flex-1 font-mono text-sm"
                        />
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={handleCopyApiKey}
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>

                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
                        Generate New Key
                      </Button>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900/30 rounded-lg">
                      <p className="text-sm text-yellow-800 dark:text-yellow-400">
                        <strong>Warning:</strong> Keep your API keys secure. Anyone with your key can access your account.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6">
                {/* Current Plan */}
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-900/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge className="mb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                        Current Plan
                      </Badge>
                      <h2 className="text-2xl text-gray-900 dark:text-white mb-2">Pro Plan</h2>
                      <p className="text-gray-600 dark:text-gray-400">$49/month • Billed monthly</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl text-gray-900 dark:text-white mb-2">$49</div>
                      <Button variant="outline">Upgrade Plan</Button>
                    </div>
                  </div>
                </Card>

                {/* Usage Metrics */}
                <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg text-gray-900 dark:text-white mb-4">Usage This Month</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">Minutes Processed</span>
                        <span className="text-gray-900 dark:text-white">247 / 500</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600" style={{ width: '49.4%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">AI Tasks</span>
                        <span className="text-gray-900 dark:text-white">1,834 / 5,000</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600" style={{ width: '36.68%' }} />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Payment Method */}
                <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg text-gray-900 dark:text-white mb-4">Payment Method</h3>
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-900 dark:text-white">•••• •••• •••• 4242</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Expires 12/2025</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                </Card>

                {/* Billing History */}
                <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg text-gray-900 dark:text-white mb-4">Billing History</h3>
                  <div className="space-y-3">
                    {[
                      { date: 'Nov 1, 2025', amount: '$49.00', status: 'Paid' },
                      { date: 'Oct 1, 2025', amount: '$49.00', status: 'Paid' },
                      { date: 'Sep 1, 2025', amount: '$49.00', status: 'Paid' },
                    ].map((invoice, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div>
                          <p className="text-sm text-gray-900 dark:text-white">{invoice.date}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Pro Plan</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-900 dark:text-white">{invoice.amount}</p>
                          <Badge  className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            {invoice.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div className="space-y-6">
                <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl text-gray-900 dark:text-white mb-6">Connected Apps</h2>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'Slack', description: 'Send meeting summaries to Slack', connected: true, logo: '💬' },
                      { name: 'Google Calendar', description: 'Sync meetings automatically', connected: true, logo: '📅' },
                      { name: 'Notion', description: 'Export notes to Notion', connected: false, logo: '📝' },
                      { name: 'Zoom', description: 'Record and transcribe Zoom meetings', connected: true, logo: '🎥' },
                    ].map((app) => (
                      <div key={app.name} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                            {app.logo}
                          </div>
                          <div>
                            <p className="text-sm text-gray-900 dark:text-white">{app.name}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{app.description}</p>
                          </div>
                        </div>
                        {app.connected ? (
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-0">
                            Connected
                          </Badge>
                        ) : (
                          <Button variant="outline" size="sm">Connect</Button>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
