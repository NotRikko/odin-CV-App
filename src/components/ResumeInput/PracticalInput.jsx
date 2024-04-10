import {useState} from 'react'

export default function PracticalInput({resumeData, onUpdate}) {
    return (
        <>
            <h2>Work Experience</h2>
            <label>
                Company Name
                <input
                    type="text"
                    name="workSection.workName"
                    value={resumeData.workSection.workName}
                    onChange={onUpdate}
                />
            </label>
            <label>
                Position Title
                <input
                    type="text"
                    name="workSection.workTitle"
                    value={resumeData.workSection.workTitle}
                    onChange={onUpdate}
                />
            </label>
            <label>
                Job Responsibilities
                <input
                    type="text"
                    name="workSection.workResponsibilities"
                    value={resumeData.workSection.workResponsibilities}
                    onChange={onUpdate}
                />
            </label>
            <label>
                Start Date
                <input
                    type="text"
                    name="workSection.workStartDate"
                    value={resumeData.workSection.workStartdate}
                    onChange={onUpdate}
                />
            </label>
            <label>
                End Date
                <input
                    type="text"
                    name="workSection.workEndDate"
                    value={resumeData.workSection.workEndDate}
                    onChange={onUpdate}
                />
            </label>
        </>
    )
}