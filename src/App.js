import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AboutMeSection from "./Components/AboutMeSection";
import ExperienceSection from "./Components/ExperienceSection";
import SkillsSection from "./Components/SkillsSection";
import ContactSection from "./Components/ContactSection";
import ProjectSection from "./Components/ProjectSection";

function App() {
  const serverLink = process.env.REACT_APP_SERVER
  const userId = process.env.REACT_APP_USER_ID
    const [skills, setSkills] = useState([]);
    const getSkills = async () => {
      await axios.get(serverLink+"/api/skills/"+userId).then((res)=>{
        if(res.data.success){
          setSkills(res.data.data)
        }
      })
    };
    const [projects, setProjects] = useState([]);
    const getProjects = async () => {
      await axios.get(serverLink+"/api/projects/"+userId).then((res)=>{
        if(res.data){
          setProjects(res.data.data)
        }
      })
    };
    const [experiences, setExperiences] = useState([]);
    const getExperiences = async () => {
      await axios.get(serverLink+"/api/experience/"+userId).then((res)=>{
        if(res.data.success){
          setExperiences(res.data.data)
        }
      })
    };
    const [contacts, setContacts] = useState([]);
    const getContacts = async () => {
      await axios.get(serverLink+"/api/contacts/"+userId).then((res)=>{
        if(res.data.success){
          setContacts(res.data.data)
        }
      })
    };

    useEffect(()=>{
      console.log(serverLink)
      console.log(userId)
      getSkills()
      getProjects()
      getExperiences()
      getContacts()
    },[])

    return (
        <div className="App">
            <AboutMeSection />
            <SkillsSection skills = {skills}/>
            <ProjectSection projects = {projects}/>
            <ExperienceSection  experiences = {experiences}/>
            <ContactSection contacts = {contacts}/>
        </div>
    );
}

export default App;
