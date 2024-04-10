import Education from './Education'
import General from './General'
import Practical from './Practical'

export default function RenderedResume({resumeData}) {
    const GeneralRender = resumeData.generalSection;
    const EducationRender = resumeData.educationSection;
    const PracticalRender = resumeData.workSection;

    return (
        <>
            <General toRender={GeneralRender} />
            <Education toRender={EducationRender} />
            <Practical toRender={PracticalRender}/>
        </>
    )
}