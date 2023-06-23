import axios from 'axios';
import { DiaryEntry, NewDiaryEntry } from '../types';

const baseUrl = 'http://localhost:3000/api/diaries';

export const getAllEntries = async (): Promise<DiaryEntry[]> => {
  const res = await axios.get<DiaryEntry[]>(baseUrl);
  return res.data;
};

export const sendDiaryEntry = async (diary: NewDiaryEntry): Promise<DiaryEntry> => {
  const res = await axios.post<DiaryEntry>(baseUrl, diary);
  return res.data;
};