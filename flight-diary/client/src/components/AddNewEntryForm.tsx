import { useState } from "react";
import { newDiary } from "../types";

interface AddNewEntryFormProps {
  addNewEntry: (object: newDiary) => void;
}

const AddNewEntryForm = (props: AddNewEntryFormProps) => {
  const [inputDate, setInputDate] = useState("");
  const [inputVisibility, setInputVisibility] = useState("");
  const [inputWeather, setInputWeather] = useState("");
  const [inputComment, setInputComment] = useState("");

  const submit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newEntry: newDiary = {
      date: inputDate,
      visibility: inputVisibility,
      weather: inputWeather,
      comment: inputComment,
    };

    props.addNewEntry(newEntry);

    setInputDate("");
    setInputVisibility("");
    setInputWeather("");
    setInputComment("");
  };

  return (
    <section>
      <h2>Add new entry</h2>
      <form onSubmit={submit}>
        <label>
          Date: <input type="text" value={inputDate} onChange={(event) => setInputDate(event.target.value)} />
        </label>
        <label>
          Visibility:{" "}
          <input type="text" value={inputVisibility} onChange={(event) => setInputVisibility(event.target.value)} />
        </label>
        <label>
          Weather: <input type="text" value={inputWeather} onChange={(event) => setInputWeather(event.target.value)} />
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
