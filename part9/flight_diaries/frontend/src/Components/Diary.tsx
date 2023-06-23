import React from 'react';
import { DiaryEntry } from '../types';

const Diary: React.FC<DiaryEntry> = ({date, weather, visibility}) => {
    return (
        <div>
            <h1>{date}</h1>
            <p>visibility: {visibility}</p>
            <p>weather: {weather}</p>
        </div>
    );
};

export default Diary;