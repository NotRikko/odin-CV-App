export default function Education({toRender}) {
    const EducationKeyLabels = {
        schoolName: 'School Name',
        major: 'Major',
        startDate: 'Start Date',
        endDate: 'End Date'
    };
    return (
        <div className="section">
            <h1>Education</h1>
            <div className="sectionInfo">
                <div className="sectionInfo2">
                    <h2 style={{marginBottom: "-15px"}}>{toRender.schoolName}</h2>
                    <h4 style={{fontStyle: "italic"}}>{toRender.major}</h4>
                </div>
                <div className="sectionDates">
                    <h4>{toRender.startDate} - {toRender.endDate}</h4>
                </div>
            </div>
        </div>
    )
}