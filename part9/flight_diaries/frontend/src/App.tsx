import { useEffect, useState } from 'react';
import DiaryList from './Components/DiaryList';
import { getAllEntries } from './services/diaryEntryService';
import { DiaryEntry } from './types';
function App() {
  const [entries, setEntries] = useState<DiaryEntry[] | []>([]);

  useEffect(() => {
    (async () => {
      const entries = await getAllEntries();
      setEntries(entries);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Diary entries</h1>
      <DiaryList entries={entries}/>
    </div>
  );
}

export default App;
