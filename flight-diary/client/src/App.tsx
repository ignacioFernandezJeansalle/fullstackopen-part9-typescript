import "./App.css";

import { useEffect, useState } from "react";
import { Diary, newDiary } from "./types";
import axios from "axios";
import diaryService from "./services/diaryService";

import Header from "./components/Header";
import AddNewEntryForm from "./components/AddNewEntryForm";
import DiaryEntries from "./components/DiaryEntries";

function App() {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [newEntryMessage, setNewEntryMessage] = useState("");

  useEffect(() => {
    diaryService.getDiaries().then((data) => setDiaries(data));
  }, []);

  const addNewEntry = (object: newDiary) => {
    diaryService
      .createDiary(object)
      .then((data) => setDiaries(diaries.concat(data)))
      .catch((error: unknown) => {
        let errorMessage = "Something went wrong...";
        if (axios.isAxiosError(error)) {
          errorMessage = error.response?.data;
        }

        setNewEntryMessage(errorMessage);
        setTimeout(() => setNewEntryMessage(""), 5000);
      });
  };

  return (
    <>
      <Header />
      <main>
        <AddNewEntryForm addNewEntry={addNewEntry} message={newEntryMessage} />
        <DiaryEntries diaries={diaries} />
      </main>
    </>
  );
}

export default App;
