import { useState, useEffect } from 'react'
import ResumeForm from './components/ResumeInput/ResumeForm'

import './App.css'

function App() {
  const [resumeData, setResumeData] = useState({
    generalSection: {
      name: "",
      phoneNum:"",
      email:""
    },
    educationSection: {
      schoolName: "",
      major: "",
      startDate: "",
      endDate: ""
    },
    workSection: {
      workName: "",
      workTitle: "",
      workResponsibilities: "",
      workStartdate: "",
      workEndDate: ""
    }
  });

  const handleSubmission = (event) => {
    event.preventDefault();
    setResumeData((...prevResumeData) => ({
      ...prevResumeData,
      generalSection: resumeData.generalSection,
      educationSection: resumeData.educationSection,
      workSection: resumeData.workSection
    }));
    console.log(resumeData)
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    const [sectionName, fieldName] = name.split('.');
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      [sectionName]: {
        ...prevResumeData[sectionName],
        [fieldName]: value
      }
    }));

  }

  return (
    <>
      <ResumeForm resumeData={resumeData} handleSubmit={handleSubmission} handleChange={handleChange}/>
    </>
  )
}

export default App
