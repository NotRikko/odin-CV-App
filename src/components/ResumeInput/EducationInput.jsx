import {useState} from 'react'

export default function Educationinput({resumeData, onUpdate}) {
    
    return(
        <>
            <h2>Education</h2>
            <label>
                School Name
                <input
                type="text"
                name="educationSection.schoolName"
                value={resumeData.educationSection.schoolName}
                onChange={onUpdate}
                />
            </label>
            <label>
                Title of Study
                <input
                type="text"
                name="educationSection.major"
                value={resumeData.educationSection.major}
                onChange={onUpdate}
                />
            </label>
            <label>
                Start Date
                <input
                type="text"
                name="educationSection.startDate"
                value={resumeData.educationSection.startDate}
                onChange={onUpdate}
                />
            </label>
            <label>
                Graduation Date
                <input
                type="text"
                name="educationSection.endDate"
                value={resumeData.educationSection.endDate}
                onChange={onUpdate}
                />
            </label>
            
        </>
        
        
    )
}