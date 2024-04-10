import {useState, useEffect} from 'react'
import GeneralInput from './GeneralInput'
import EducationInput from './EducationInput'
import PracticalInput from './PracticalInput'
import './Input.css'

export default function ResumeForm({resumeData, handleSubmit, handleChange}) {
    useEffect(() => {
        console.log("resumeData updated:", resumeData);
      }, [resumeData]);
      
    return (
        <>
            <form onSubmit={handleSubmit}>
                <GeneralInput resumeData={resumeData} onUpdate={handleChange}/>
                <EducationInput resumeData={resumeData} onUpdate={handleChange}/>
                <PracticalInput resumeData={resumeData} onUpdate={handleChange}/>
                <button type="submit"> Submit</button>
            </form>
        </>
    )
}