import Education from './Education'
import General from './General'
import Practical from './Practical'
import './RenderedStyle.css'

export default function RenderedResume({resumeData}) {
    const GeneralRender = resumeData.generalSection;
    const EducationRender = resumeData.educationSection;
    const PracticalRender = resumeData.workSection;

    return (
        <div id="renderedResume">
            <General toRender={GeneralRender} />
            <div id="alignLeft">
                <h1>Education</h1>
                {EducationRender.map((education, index) => (
                    <Education
                        key={index}
                        toRender = {education}
                    />
                ))}
                <h1>Experience</h1>
                {PracticalRender.map((work, index) => (
                    <Practical
                        key={index}
                        toRender = {work}
                    />
                ))}
            </div>
        </div>
    )
}