import axios from "axios";
import { Await, useParams } from "react-router-dom";
import { OF_type } from "../utils/types";

export function getOfs() {
  return axios.get("http://127.0.0.1:8000").then((res) => {
    // console.log("test", res.data);
    return res.data;
  });
}
export async function getOf(id: number) {
  return await axios.get("http://localhost:8000/of/" + id + "/").then((res) => {
    console.log("get of test", res.data);
    return res.data;
  });
}
export async function updateOF(url: string, of: OF_type) {
  console.log("post of test avant", of);

  return await axios.put(url, of).then((res) => {
    console.log("post of test", res.data);
    return res.data;
  });
}
export async function uploadPlanningFile(filename: string, semaine: number) {
  let api = "http://localhost:8000/planning/upload/";
  console.log("Button clicked");

  let formData = new FormData();
  formData.append("pdf", filename);

  let axiosConfig = {
    headers: {
      "Content-Type": "multpart/form-data",
    },
  };

  console.log(formData);
  axios
    .post(api + "/files/", formData, axiosConfig)
    .then((response) => {
      console.log(response);
      // setstatus('File Uploaded Successfully')
    })
    .catch((error) => {
      console.log(error);
    });
}
export function getPlanningOfWeek(semaine: number) {
  let url = "http://127.0.0.1:8000/Planning/" + semaine + "/";
  return axios.get(url).then((res) => {
    return res.data;
  });
}
