import Education from './Education'
import General from './General'
import Practical from './Practical'
import './RenderedStyle.css'

export default function RenderedResume({resumeData}) {
    const GeneralRender = resumeData.generalSection;
    const EducationRender = resumeData.educationSection;
    const PracticalRender = resumeData.workSection;

    return (
        <>
            <General toRender={GeneralRender} />
            <div id="alignLeft">
                <Education toRender={EducationRender} />
                <Practical toRender={PracticalRender}/>
            </div>
        </>
    )
}