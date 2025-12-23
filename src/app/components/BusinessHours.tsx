'use client'
import React, { useState, useEffect } from 'react';

const BusinessHours: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div id="business-hours" className="p-4 border rounded bg-white">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div id="business-hours" className="p-4 border rounded bg-white">
      <h2 className="text-lg font-bold mb-2">営業時間</h2>
      <ul className="space-y-1">
        <li id="monday-to-friday">月〜金: 9:00 - 18:00 <span>LastOrder: 17:45</span></li>
        <li id="saturday">土: 10:00 - 19:00 <span>LastOrder: 18:45</span></li>
        <li id="sunday-holiday">日・祝: 休業</li>
      </ul>
    </div>
  );
};

export default BusinessHours;
