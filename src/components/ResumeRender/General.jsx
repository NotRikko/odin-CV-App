export default function General({toRender}) {
    const GeneralKeyLabels = {
        name: 'Full Name',
        phoneNum: 'Phone Number',
        email: 'Email',
    };

    return (
        <div id="generalSec">
            <h1 id="name">{toRender.name}</h1>
            <div id="generalSubSec">
                {Object.entries(toRender).map(([key, value]) => (
                    key !== "name" &&
                    <h4 key={key}>{value}</h4>
                ))}
            </div>
        </div>
    )
}