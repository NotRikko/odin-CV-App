import {useState, useEffect} from 'react'

export default function GeneralInput({resumeData, onUpdate}) {
    
    return (
        <>
            <h2>General Information</h2>
            <label>
                Name
                <input
                    type="text"
                    name="generalSection.name"
                    value={resumeData.generalSection.name}
                    onChange={onUpdate}
                />
            </label>
            <label>
                Phone Number
                <input
                    type="text"
                    name="generalSection.phoneNum"
                    value={resumeData.generalSection.phoneNum}
                    onChange={onUpdate}
                />
            </label>
            <label>
                Email
                <input
                    type="text"
                    name="generalSection.email"
                    value={resumeData.generalSection.email}
                    onChange={onUpdate}
                />
            </label>
        </>
    )
}