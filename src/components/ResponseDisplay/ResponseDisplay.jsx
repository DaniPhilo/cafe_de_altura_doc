import { JsonViewer } from "@textea/json-viewer";

export default function ResponseDisplay({ response }) {
    return (
        <section className="fixed top-0 right-0 w-display-width h-screen bg-slate-200 overflow-y-scroll">
            {
                response ?
                    <JsonViewer value={response} /> :
                    null
            }
        </section>
    )
}
