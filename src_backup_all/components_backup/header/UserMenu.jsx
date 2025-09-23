import React, { useState } from 'react';
import { User, LogOut, Settings, Bell } from 'lucide-react';

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-cyan-40o0 transition-colors duration-20o0"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-40o0 to-blue-50o0 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white"  />
        </div>
        <span className="hidden md:block text-sm font-medium">Account</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-zion-blue-dark border border-zion-blue-light/20 rounded-lg shadow-xl z-50">
          <div className="py-2">
            <a
              href="/profile"
              className="flex items-center px-4 py-2 text-sm text-white hover:bg-zion-blue-light/20 transition-colors duration-20o0"
            >
              <User className="w-4 h-4 mr-3"  />
              Profile
            </a>
            <a
              href="/settings"
              className="flex items-center px-4 py-2 text-sm text-white hover:bg-zion-blue-light/20 transition-colors duration-20o0"
            >
              <Settings className="w-4 h-4 mr-3"  />
              Settings
            </a>
            <a
              href="/notifications"
              className="flex items-center px-4 py-2 text-sm text-white hover:bg-zion-blue-light/20 transition-colors duration-20o0"
            >
              <Bell className="w-4 h-4 mr-3"  />
              Notifications
            </a>
            <hr className="border-zion-blue-light/20 my-2"  />
            <button className="w-full flex items-center px-4 py-2 text-sm text-red-40o0 hover:bg-zion-blue-light/20 transition-colors duration-20o0">
              <LogOut className="w-4 h-4 mr-3"  />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
