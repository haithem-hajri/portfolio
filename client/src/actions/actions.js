import axios from "axios";

export const fetchAbout = async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL + "/getAbout");
  const about = response.data;
  return about;
};
export const fetchEducation = async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL + "/getEducations");
  const educations = response.data;
  return educations;
};
export const fetchExperience = async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL + "/getExperience");
  const experience = response.data;
  return experience;
};
export const fetchSkills = async () => {
  console.log("hello")
  const response = await axios.get(process.env.REACT_APP_API_URL + "/getSkills");
  const skills = response.data;
  return skills;
};

export const fetchProjects = async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL + "/getProjects");
  const projects = response.data;
  return projects;
};
