import { useState } from "react";
import { Visibility, Weather, NewDiary } from "../types";

interface AddNewEntryFormProps {
  message: string;
  addNewEntry: (object: NewDiary) => void;
}

const AddNewEntryForm = (props: AddNewEntryFormProps) => {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  const initialValues = {
    date: formattedDate,
    visibility: Visibility.Great,
    weather: Weather.Sunny,
    comment: "",
  };

  const [inputDate, setInputDate] = useState(initialValues.date);
  const [inputVisibility, setInputVisibility] = useState<Visibility>(initialValues.visibility);
  const [inputWeather, setInputWeather] = useState<Weather>(initialValues.weather);
  const [inputComment, setInputComment] = useState(initialValues.comment);

  const submit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newEntry: NewDiary = {
      date: inputDate,
      visibility: inputVisibility,
      weather: inputWeather,
      comment: inputComment,
    };

    props.addNewEntry(newEntry);

    setInputDate(initialValues.date);
    setInputVisibility(initialValues.visibility);
    setInputWeather(initialValues.weather);
    setInputComment(initialValues.comment);
  };

  return (
    <section>
      <h2>Add new entry</h2>
      {props.message && <p style={{ color: "red" }}>{props.message}</p>}

      <form onSubmit={submit}>
        <label>
          Date: <input type="date" value={inputDate} onChange={(event) => setInputDate(event.target.value)} />
        </label>

        <label>
          Visibility:
          {Object.values(Visibility).map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="visibility"
                value={value}
                checked={inputVisibility === value}
                onChange={(event) => setInputVisibility(event.target.value as Visibility)}
              />
              {value}
            </label>
          ))}
        </label>

        <label>
          Weather:
          {Object.values(Weather).map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="weather"
                value={value}
                checked={inputWeather === value}
                onChange={(event) => setInputWeather(event.target.value as Weather)}
              />
              {value}
            </label>
          ))}
        </label>

        <label>
          Comment: <input type="text" value={inputComment} onChange={(event) => setInputComment(event.target.value)} />
        </label>

        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddNewEntryForm;
