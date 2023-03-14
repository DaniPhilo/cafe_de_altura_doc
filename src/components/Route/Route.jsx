export default function Route({ method, url, parameters = false }) {

    return (
        <div>
            <div>
                <div>{method}</div>
                <div>{url}</div>
            </div>
            <div>
                <button type="button">Try Out</button>
            </div>
        </div>
    )
}
