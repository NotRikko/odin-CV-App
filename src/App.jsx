import { useState, useEffect } from 'react'
import ResumeForm from './components/ResumeInput/ResumeForm'
import RenderedResume from './components/ResumeRender/RenderedResume'

import './App.css'

function App() {
  const [resumeData, setResumeData] = useState({
    generalSection: {
      name: "Rikko",
      phoneNum:"4252",
      email:"ssss"
    },
    educationSection: {
      schoolName: "sa",
      major: "aa",
      startDate: "aa",
      endDate: "aa"
    },
    workSection: {
      workName: "aa",
      workTitle: "aa",
      workResponsibilities: "aa",
      workStartdate: "aa",
      workEndDate: "aa"
    }
  });
  const [isRendered, setIsRendered] =useState(true)

  const handleSubmission = (event) => {
    event.preventDefault();
    setIsRendered(true);
    
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
      {isRendered 
        ? 
        <RenderedResume resumeData={resumeData} />
        : 
        <ResumeForm 
          resumeData={resumeData} handleSubmit={handleSubmission} handleChange={handleChange}
        />
      }
    </>
  )
}

export default App
