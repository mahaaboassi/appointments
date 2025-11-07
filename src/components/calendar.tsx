import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles, can be overridden

function MyCalendar() {
  const [date] = useState(new Date());

  return (
    <div className="flex justify-center ">
      <Calendar
        // onChange={setDate}
        value={date}
        className="rounded-lg !border overflow-hidden !border-[var(--dark-1)] !w-full" // Tailwind classes
        tileClassName={() => {
          return '';
        }}
      />
    </div>
  );
}

export default MyCalendar;