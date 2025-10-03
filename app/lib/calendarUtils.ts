export function generateCalendarDays(containerId: string, onSelect: (day: number) => void) {
  const grid = document.getElementById(containerId)!;
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const available = [2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20];

  grid.innerHTML = '';
  for (let i = 0; i < firstDay; i++) grid.appendChild(document.createElement('div'));

  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day';
    cell.textContent = String(d);
    if (available.includes(d)) {
      cell.classList.add('available');
      cell.addEventListener('click', () => { onSelect(d); selectDate(d, cell); });
    }
    grid.appendChild(cell);
  }
}

function selectDate(day: number, el: HTMLElement) {
  document.querySelectorAll('.calendar-day.selected').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  const slotsBox = document.getElementById('time-slots')!;
  slotsBox.innerHTML = availableSlots.map(t => `<button class="w-full text-left p-3 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all">${t}</button>`).join('');
}

export const availableSlots = [
  '9:00 AM - 10:00 AM', '10:30 AM - 11:30 AM', '1:00 PM - 2:00 PM',
  '2:30 PM - 3:30 PM', '4:00 PM - 5:00 PM',
];