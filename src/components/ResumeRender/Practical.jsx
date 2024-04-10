export default function Practical({toRender}) {

    const PracticalKeyLabels = {
        workName: 'Work Name',
        workTitle: 'Work Title',
        workResponsibilities: 'Responsibilities',
        workStartDate: 'Start Date',
        workEndDate: 'End Date'
    };

    return (
        <div className="section">
            <h1>Experience</h1>
            {/*
            {Object.entries(toRender).map(([key, value]) => (
                <div key={key} className="sectionInfo">
                    <h2>{PracticalKeyLabels[key]} </h2>
                    <h4>{value}</h4>
                </div>
            ))}
            */}
            <div className="sectionInfo">
                <div className="sectionInfo2">
                    <h2 style={{marginBottom: "-15px"}}>{toRender.workName}</h2>
                    <h4 style={{fontStyle: "italic"}}>{toRender.workTitle}</h4>
                    <ul id="workList">
                        {Object.entries(toRender.workResponsibilities).map(([key, value]) => (
                            <li key={key}>{value}</li>
                        ))}
                    </ul>
                </div>
                <div className="sectionDates">
                    <h4>{toRender.workStartDate} - {toRender.workEndDate}</h4>
                </div>
            </div>
        </div>
    )
}