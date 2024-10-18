import { Diary } from "../types";

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

export default DiaryEntries;
