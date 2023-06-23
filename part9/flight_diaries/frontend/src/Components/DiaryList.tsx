import React from 'react';
import { DiaryEntry } from '../types';
import Diary from './Diary';

interface DiaryListProps {
  entries: DiaryEntry[];
}

const DiaryList: React.FC<DiaryListProps> = ({ entries }) => {
  return (
    <>
      {entries.map((entry) => (
        <Diary key={entry.id} {...entry} />
      ))}
    </>
  );
};

export default DiaryList;
