import { useState, useEffect } from 'react'
import ResumeForm from './components/ResumeInput/ResumeForm'
import RenderedResume from './components/ResumeRender/RenderedResume'

import './App.css'

function App() {
  const [resumeData, setResumeData] = useState({
    generalSection: {
      name: "Rikko",
      phoneNum:"818-523-4200",
      email:"darikko@gmail.com"
    },
    educationSection: {
      schoolName: "University of California Irvine",
      major: "Bachelor of Science",
      startDate: "2021",
      endDate: "2024"
    },
    workSection: {
      workName: "Lost Art Studio",
      workTitle: "Live Operations Specialist",
      workResponsibilities: ["Studied", "Ate", "Slept"],
      workStartDate: "2021",
      workEndDate: "2024"
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
