import "./App.css";

import { useEffect, useState } from "react";
import { Diary, newDiary } from "./types";
import diaryService from "./services/diaryService";

import Header from "./components/Header";
import AddNewEntryForm from "./components/AddNewEntryForm";
import DiaryEntries from "./components/DiaryEntries";

function App() {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    diaryService.getDiaries().then((data) => setDiaries(data));
  }, []);

  const addNewEntry = (object: newDiary) => {
    diaryService.createDiary(object).then((data) => setDiaries(diaries.concat(data)));
  };

  return (
    <>
      <Header />
      <main>
        <AddNewEntryForm addNewEntry={addNewEntry} />
        <DiaryEntries diaries={diaries} />
      </main>
    </>
  );
}

export default App;
