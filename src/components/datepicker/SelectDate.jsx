import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SelectDate = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState('month'); // Start with the month view

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleMonthChange = (e) => {
    const newDate = new Date(date);
    newDate.setMonth(e.target.value);  // Set new month
    setDate(newDate);
  };

  const handleYearChange = (e) => {
    const newDate = new Date(date);
    newDate.setFullYear(e.target.value); // Set new year
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        {/* Year and Month Selectors */}
        <select value={date.getMonth()} onChange={handleMonthChange} className="month-selector">
          {Array.from({ length: 12 }).map((_, index) => (
            <option key={index} value={index}>
              {new Date(0, index).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
        
        <select value={date.getFullYear()} onChange={handleYearChange} className="year-selector">
          {/* You can customize the range of years displayed */}
          {Array.from({ length: 20 }).map((_, index) => (
            <option key={index} value={2020 + index}>
              {2020 + index}
            </option>
          ))}
        </select>
      </div>
      
      <Calendar
        onChange={handleDateChange}
        value={date}
        view={view}
        showNeighboringMonth={false}
        minDate={new Date(2020, 0, 1)}  // Optional: set minimum date
        maxDate={new Date(2030, 11, 31)}  // Optional: set maximum date
      />
    </div>
  );
};

export default SelectDate;
