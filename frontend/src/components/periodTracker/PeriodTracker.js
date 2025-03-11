import React, { useState } from 'react';
import { Calendar, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../styles/PeriodTracker.css';

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const PeriodTracker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [symptoms, setSymptoms] = useState([]);
  const [mood, setMood] = useState('');
  const [flow, setFlow] = useState('');
  const [notes, setNotes] = useState('');
  
  const periodDays = [5, 6, 7, 8, 9];
  
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };
  
  const daysInMonth = getDaysInMonth(month, year);
  const firstDayOfMonth = getFirstDayOfMonth(month, year);
  
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }
  
  for (let i = 1; i <= daysInMonth; i++) {
    const isPeriodDay = periodDays.includes(i);
    const isToday = i === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear();
    const isSelected = selectedDate && i === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear();
    
    days.push(
      <div 
        key={i} 
        className={`calendar-day ${isPeriodDay ? 'period-day' : ''} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
        onClick={() => setSelectedDate(new Date(year, month, i))}
      >
        {i}
      </div>
    );
  }
  
  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };
  
  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };
  
  const handleSymptomToggle = (symptom) => {
    if (symptoms.includes(symptom)) {
      setSymptoms(symptoms.filter(s => s !== symptom));
    } else {
      setSymptoms([...symptoms, symptom]);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving period data:', { date: selectedDate, symptoms, mood, flow, notes });
    setSymptoms([]);
    setMood('');
    setFlow('');
    setNotes('');
    setSelectedDate(null);
  };
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  return (
    <div className="period-tracker-container">
      <div className="period-tracker-header">
        <h1>Period Tracker</h1>
        <p>Track your cycle and symptoms to gain insights into your patterns</p>
      </div>
      <div className="period-tracker-content">
        <div className="calendar-section">
          <div className="calendar-header">
            <button onClick={handlePrevMonth} className="month-nav-btn"><ChevronLeft size={20} /></button>
            <h2>{monthNames[month]} {year}</h2>
            <button onClick={handleNextMonth} className="month-nav-btn"><ChevronRight size={20} /></button>
          </div>
          <div className="calendar-weekdays">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day}>{day}</div>)}
          </div>
          <div className="calendar-days">{days}</div>
        </div>
        <div className="tracking-form-section">
          <h3>{selectedDate ? `Log for ${selectedDate.toLocaleDateString()}` : 'Select a date to log'}</h3>
          {selectedDate ? (
            <form onSubmit={handleSubmit} className="tracking-form">
              <div className="form-group">
                <label>Flow Intensity</label>
                <div className="flow-buttons">
                  {['light', 'medium', 'heavy'].map(level => (
                    <button key={level} type="button" className={`flow-btn ${flow === level ? 'active' : ''}`} onClick={() => setFlow(level)}>{level}</button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Symptoms</label>
                <div className="symptoms-grid">
                  {['Cramps', 'Headache', 'Bloating', 'Fatigue', 'Acne', 'Breast Tenderness', 'Nausea', 'Mood Swings'].map(symptom => (
                    <div key={symptom} className={`symptom-tag ${symptoms.includes(symptom) ? 'active' : ''}`} onClick={() => handleSymptomToggle(symptom)}>{symptom}</div>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Mood</label>
                <select value={mood} onChange={(e) => setMood(e.target.value)} className="mood-select">
                  <option value="">Select your mood</option>
                  {['happy', 'calm', 'tired', 'anxious', 'irritable', 'sad'].map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Notes</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Add notes..." rows={4}></textarea>
              </div>
              <button type="submit" className="save-btn">Save Entry</button>
            </form>
          ) : (
            <div className="select-date-prompt"><Calendar size={48} /><p>Select a date on the calendar</p></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeriodTracker;
