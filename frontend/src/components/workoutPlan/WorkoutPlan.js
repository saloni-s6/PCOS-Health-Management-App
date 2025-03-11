import React, { useState } from 'react';
import { Dumbbell, Clock, Calendar, Heart, Activity } from 'lucide-react';
import '../../styles/WorkoutPlan.css';

const WorkoutPlan = () => {
  const [fitnessLevel, setFitnessLevel] = useState('beginner');
  const [pcosType, setPcosType] = useState('insulin-resistant');
  const [selectedDay, setSelectedDay] = useState(null);
  const [activeTab, setActiveTab] = useState('strength');

  const getWeeklySchedule = () => {
    if (pcosType === 'insulin-resistant') {
      return [
        { day: 'Monday', workout: 'Strength + HIIT' },
        { day: 'Tuesday', workout: 'Rest or Light Walking' },
        { day: 'Wednesday', workout: 'Strength + Steady Cardio' },
        { day: 'Thursday', workout: 'Rest or Yoga' },
        { day: 'Friday', workout: 'Strength + HIIT' },
        { day: 'Saturday', workout: 'Light Cardio + Flexibility' },
        { day: 'Sunday', workout: 'Rest' }
      ];
    } else if (pcosType === 'inflammatory') {
      return [
        { day: 'Monday', workout: 'Low-Impact Cardio' },
        { day: 'Tuesday', workout: 'Gentle Strength Training' },
        { day: 'Wednesday', workout: 'Yoga or Pilates' },
        { day: 'Thursday', workout: 'Rest' },
        { day: 'Friday', workout: 'Low-Impact Cardio' },
        { day: 'Saturday', workout: 'Gentle Strength Training' },
        { day: 'Sunday', workout: 'Rest' }
      ];
    } else {
      return [
        { day: 'Monday', workout: 'Strength Training' },
        { day: 'Tuesday', workout: 'Moderate Cardio' },
        { day: 'Wednesday', workout: 'Yoga or Pilates' },
        { day: 'Thursday', workout: 'Rest' },
        { day: 'Friday', workout: 'Strength Training' },
        { day: 'Saturday', workout: 'Moderate Cardio' },
        { day: 'Sunday', workout: 'Rest' }
      ];
    }
  };

  const weeklySchedule = getWeeklySchedule();

  return (
    <div className="workout-plan-container">
      <h1>Personalized Workout Plan</h1>
      <div className="preference-selectors">
        <select value={pcosType} onChange={(e) => setPcosType(e.target.value)}>
          <option value="insulin-resistant">Insulin Resistant PCOS</option>
          <option value="inflammatory">Inflammatory PCOS</option>
          <option value="hormonal">Hormonal PCOS</option>
        </select>
        <select value={fitnessLevel} onChange={(e) => setFitnessLevel(e.target.value)}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <div className="weekly-schedule">
        {weeklySchedule.map((day, index) => (
          <div key={index} onClick={() => setSelectedDay(index)}>
            <h4>{day.day}</h4>
            <p>{day.workout}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlan;
