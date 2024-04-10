export default function Practical({toRender}) {
    return (
        <>
            {Object.entries(toRender).map(([key, value]) => (
                <div key={key}>
                    <h2>{key} </h2>
                    <h4>{value}</h4>
                </div>
            ))}
        </>
    )
}