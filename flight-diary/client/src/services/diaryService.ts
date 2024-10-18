import axios from "axios";
import { Diary, newDiary } from "../types";

const baseUrl = "http://localhost:3000/api/diaries";

const getDiaries = () => {
  return axios.get<Diary[]>(baseUrl).then((response) => response.data);
};

const createDiary = (object: newDiary) => {
  return axios.post<Diary>(baseUrl, object).then((response) => response.data);
};

export default {
  getDiaries,
  createDiary,
};
