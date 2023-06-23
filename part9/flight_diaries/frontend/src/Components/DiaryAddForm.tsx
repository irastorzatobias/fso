import React from 'react';
import useField, { UseFieldReturn } from '../hooks/useField';
import { sendDiaryEntry } from '../services/diaryEntryService';
import { Visibility, Weather } from '../types';

const DiaryAddForm: React.FC = () => {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await sendDiaryEntry({
        date: date,
        visibility: visibility.value as Visibility,
        weather: weather.value as Weather,
        comment: comment.value,
      });
    } catch (e) {
      console.log(e);
    }

    visibility.reset();
    weather.reset();
    comment.reset();
    setDate('');
  };

  const visibility: UseFieldReturn = useField();
  const weather: UseFieldReturn = useField();
  const comment: UseFieldReturn = useField();

  const [date, setDate] = React.useState<string>('');

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'inline-flex', flexDirection: 'column', gap: '10px' }}
      >
        <input
          type="date"
          value={date}
          placeholder="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <input {...visibility} placeholder="visibility" />
        <input {...weather} placeholder="weather" />
        <input {...comment} placeholder="comment" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default DiaryAddForm;
