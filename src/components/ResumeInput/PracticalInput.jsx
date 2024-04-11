export default function PracticalInput({workData, onUpdate, onDelete}) {
    const handleChange = (event) => {
        const {name, value} = event.target;
        onUpdate({...workData, [name]: value});
    };

    return (
        <div className="formSection">
            <label>
                Company Name
                <input
                    type="text"
                    name="workName"
                    value={workData.workName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Position Title
                <input
                    type="text"
                    name="workTitle"
                    value={workData.workTitle}
                    onChange={handleChange}
                />
            </label>
            <label>
                Job Responsibilities
                <input
                    type="text"
                    name="workResponsibilities"
                    value={workData.workResponsibilities}
                    onChange={handleChange}
                />
            </label>
            <label>
                Start Date
                <input
                    type="text"
                    name="workStartDate"
                    value={workData.workStartDate}
                    onChange={handleChange}
                />
            </label>
            <label>
                End Date
                <input
                    type="text"
                    name="workEndDate"
                    value={workData.workEndDate}
                    onChange={handleChange}
                />
            </label>
            <button type="button" onClick={onDelete}>Delete</button>
        </div>
    )
}