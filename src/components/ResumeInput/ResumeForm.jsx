import GeneralInput from './GeneralInput'
import EducationInput from './EducationInput'
import PracticalInput from './PracticalInput'
import './Input.css'

export default function ResumeForm({resumeData, setResumeData, handleSubmit, handleChange}) {
    function addEducation() {
        const newEducationSec = [...resumeData.educationSection];
        newEducationSec.push({schoolName:"", major: "", startDate: "", endDate: ""});
        setResumeData({...resumeData, educationSection: newEducationSec})
    }

    function addWork() {
        const newWorkSec = [...resumeData.workSection];
        newWorkSec.push({workName:"", workTitle:"", workResponsibilities:[], workStartDate: "", workEndDate: "" })
        setResumeData({...resumeData, workSection: newWorkSec})
    }
    
    return (
        <div id="resumeForm">
            <form onSubmit={handleSubmit}>
                <h2>General Information</h2>
                <GeneralInput resumeData={resumeData} onUpdate={handleChange}/>
                <h2>Education</h2>
                {resumeData.educationSection.map((education, index) => (
                    <EducationInput
                        key={index}
                        educationData={education}
                        onUpdate={(updatedEducation) => {
                            const updatedEducations = [...resumeData.educationSection];
                            updatedEducations[index] = updatedEducation;
                            setResumeData({ ...resumeData, educationSection: updatedEducations });
                        }}
                        onDelete ={() => {
                            const edSectionToDelete = [...resumeData.educationSection];
                            edSectionToDelete.splice(index, 1);
                            setResumeData({ ...resumeData, educationSection: edSectionToDelete })
                    }}
                    />
                ))}
                <button type="button" onClick={addEducation}>Add</button>
                <h2>Work Experience</h2>
                {resumeData.workSection.map((work, index) => (
                    <PracticalInput
                        key={index}
                        index={index}
                        workData={work}
                        onUpdate={(updatedWork) => {
                            const updatedWorks = [...resumeData.workSection];
                            updatedWorks[index] = updatedWork;
                            setResumeData({ ...resumeData, workSection: updatedWorks });
                        }}
                        onDelete ={() => {
                                const workSectionToDelete = [...resumeData.workSection];
                                workSectionToDelete.splice(index, 1);
                                setResumeData({ ...resumeData, workSection: workSectionToDelete })
                        }}
                    />
                ))}
                <button type="button" onClick={addWork}>Add</button>
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
}