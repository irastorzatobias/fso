import React, { useState } from 'react';
import useField, { UseFieldReturn } from '../hooks/useField';
import { sendDiaryEntry } from '../services/diaryEntryService';
import { Visibility, Weather } from '../types';
import { AxiosError } from 'axios';
import VisibilityInput from './VisibilityInput';
import WeatherInput from './WeatherInput';

interface DiaryAddFormProps {
  success: boolean;
  handleSuccess: (value: boolean) => void;
}

const DiaryAddForm: React.FC<DiaryAddFormProps>= ({ success, handleSuccess }) => {
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Great);
  const [weather, setWeather] = useState<Weather>(Weather.Cloudy);
  const comment: UseFieldReturn = useField();

  const [date, setDate] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSuccess(false);

    try {
      await sendDiaryEntry({
        date: date,
        visibility: visibility,
        weather: weather,
        comment: comment.value,
      });

      comment.reset();
      setError('');
      setDate('');
      handleSuccess(true);
    } catch (e) {
      const error = e as AxiosError;
      if (error.response) {
        setError(error.response.data as string);
      } else {
        throw error;
      }
    }
  };

  return (
    <div>
      {error.length > 0 && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Success adding entry</p>}
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
        <VisibilityInput value={visibility} onChange={setVisibility}/>
        <WeatherInput value={weather} onChange={setWeather}/>
        <input {...comment} placeholder="comment" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default DiaryAddForm;
