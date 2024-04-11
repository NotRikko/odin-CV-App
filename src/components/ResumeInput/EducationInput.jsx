export default function Educationinput({educationData, onUpdate, onDelete}) {
    const handleChange = (event) => {
        const {name, value} = event.target;
        onUpdate({...educationData, [name]: value});
    };

    const deleteEduSection = (index) => {
        const edSectionToDelete = [...resumeData.educationSection];
        edSectionToDelete.splice(index, 1);
        setResumeData({ ...resumeData, educationSection: edSectionToDelete })

    }

    return(
        <div className="formSection">
            <label>
                School Name
                <input
                type="text" 
                name="schoolName"
                value={educationData.schoolName}
                onChange={handleChange}
                />
            </label>
            <label>
                Title of Study
                <input
                type="text"
                name="major"
                value={educationData.major}
                onChange={handleChange}
                />
            </label>
            <label>
                Start Date
                <input
                type="text"
                name="startDate"
                value={educationData.startDate}
                onChange={handleChange}
                />
            </label>
            <label>
                Graduation Date
                <input
                type="text"
                name="endDate"
                value={educationData.endDate}
                onChange={handleChange}
                />
            </label>
            <button type="button" onClick={onDelete}>Delete</button>

        </div>
        
        
    )
}