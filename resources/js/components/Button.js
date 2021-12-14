export default function Button(props) {
    return (
        <>
            <button  onClick={props.clickHandler} className="button">
                Run Inspect
            </button>
        </>
    )
}