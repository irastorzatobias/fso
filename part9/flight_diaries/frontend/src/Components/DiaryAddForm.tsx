import React, { useState } from 'react';
import useField, { UseFieldReturn } from '../hooks/useField';
import { sendDiaryEntry } from '../services/diaryEntryService';
import { Visibility, Weather } from '../types';
import { AxiosError } from 'axios';

const DiaryAddForm: React.FC = () => {
  const visibility: UseFieldReturn = useField();
  const weather: UseFieldReturn = useField();
  const comment: UseFieldReturn = useField();

  const [date, setDate] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await sendDiaryEntry({
        date: date,
        visibility: visibility.value as Visibility,
        weather: weather.value as Weather,
        comment: comment.value,
      });
      setError(false);

    } catch (e: any) {
      if (e && (e as AxiosError).response) {
        setError(e.response.data);
      } else {
        console.log(e);
      }
    }

    visibility.reset();
    weather.reset();
    comment.reset();
    setDate('');
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p> }
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
