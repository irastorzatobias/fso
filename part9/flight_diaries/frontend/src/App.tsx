import { useEffect, useState } from 'react';
import DiaryList from './Components/DiaryList';
import { getAllEntries } from './services/diaryEntryService';
import { DiaryEntry } from './types';
import DiaryAddForm from './Components/DiaryAddForm';
function App() {
  const [entries, setEntries] = useState<DiaryEntry[] | []>([]);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const entries = await getAllEntries();
      setEntries(entries);
    })();
  }, [success]);

  return (
    <div className="App">
      <h1>Diary entries</h1>
      <DiaryAddForm success={success} handleSuccess={setSuccess}/>
      <DiaryList entries={entries} />
    </div>
  );
}

export default App;
