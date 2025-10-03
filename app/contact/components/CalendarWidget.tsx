'use client';
import { useEffect, useState } from 'react';
import { generateCalendarDays, availableSlots } from '@/app/lib/calendarUtils';

export default function CalendarWidget() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  useEffect(() => {
    generateCalendarDays('calendar-grid', setSelectedDay);
  }, []);

  return (
    <div className="scroll-reveal">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">Schedule a Call</h2>

      <div className="calendar mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">December 2024</h3>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-700 rounded">←</button>
            <button className="p-2 hover:bg-gray-700 rounded">→</button>
          </div>
        </div>

        <div className="calendar-header">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
        </div>
        <div id="calendar-grid" className="calendar-grid" />
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4">Available Time Slots</h3>
        <div id="time-slots" className="space-y-2">
          {selectedDay ? (
            availableSlots.map(t => (
              <button key={t} className="w-full text-left p-3 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all duration-300">{t}</button>
            ))
          ) : (
            <p className="text-gray-400">Select a date to view available times</p>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <h4 className="font-semibold text-white mb-2">Timezone</h4>
        <p className="text-gray-400">All times are shown in PST (Pacific Standard Time)</p>
      </div>
    </div>
  );
}