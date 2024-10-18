import "./App.css";

import { useEffect, useState } from "react";
import { Diary } from "./types";
import axios from "axios";

const Header = () => {
  return (
    <header>
      <h1>Flight Diary</h1>
    </header>
  );
};

interface DiaryEntries {
  diaries: Diary[];
}

const DiaryEntries = (props: DiaryEntries) => {
  const { diaries } = props;

  return (
    <section>
      <h2>Diary entries</h2>
      <ul>
        {diaries.map((d) => (
          <li key={d.id}>
            <p>
              <b>{d.date}</b>
            </p>
            <p>Visibility: {d.visibility}</p>
            <p>Weather: {d.weather}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

function App() {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/diaries").then((response) => {
      const data = response.data as Diary[];
      setDiaries(data);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <DiaryEntries diaries={diaries} />
      </main>
    </>
  );
}

export default App;

/* 

{
  "id": 1,
  "date": "2017-01-01",
  "weather": "rainy",
  "visibility": "poor",
  "comment": "Pretty scary flight, I'm glad I'm alive"
 }

*/
