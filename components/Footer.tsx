"use client";

import React, { useState } from 'react';

// System status types with industry-standard wording
type SystemStatus = 'operational' | 'degraded' | 'outage';

const Footer = () => {
  // In a real app, this would be fetched from an API
  const [systemStatus] = useState<SystemStatus>('outage');

  // Get status text and color based on system status
  const getStatusInfo = (status: SystemStatus) => {
    switch (status) {
      case 'operational':
        return { 
          text: 'All systems operational', 
          dotColor: 'bg-green-500',
          textColor: 'text-green-500'
        };
      case 'degraded':
        return { 
          text: 'Degraded performance', 
          dotColor: 'bg-orange-500',
          textColor: 'text-orange-500'
        };
      case 'outage':
        return { 
          text: 'Service disruption', 
          dotColor: 'bg-red-500',
          textColor: 'text-red-500'
        };
      default:
        return { 
          text: 'Unknown status', 
          dotColor: 'bg-gray-500',
          textColor: 'text-gray-500'
        };
    }
  };

  const statusInfo = getStatusInfo(systemStatus);

  return (
    <footer className="text-xs text-gray-500 w-full max-w-3xl mx-auto py-4">
      <div className="flex justify-between items-center">
        <div className="text-xs">© {new Date().getFullYear()} Alvaro Peña</div>
        <div className="flex items-center gap-1.5">
          <span className={`inline-block h-2 w-2 rounded-full ${statusInfo.dotColor}`}></span>
          <span className={`text-xs ${statusInfo.textColor}`}>{statusInfo.text}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 