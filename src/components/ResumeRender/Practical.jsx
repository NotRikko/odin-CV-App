export default function Practical({toRender}) {

    return (
        <div className="section">
            <div className="sectionInfo">
                <div className="sectionInfo2">
                    <h2 style={{marginBottom: "-15px"}}>{toRender.workName}</h2>
                    <h4 style={{fontStyle: "italic"}}>{toRender.workTitle}</h4>
                    <h5>{toRender.workResponsibilities}</h5>
                </div>
                <div className="sectionDates">
                    <h4>{toRender.workStartDate} - {toRender.workEndDate}</h4>
                </div>
            </div>
        </div>
    )
}