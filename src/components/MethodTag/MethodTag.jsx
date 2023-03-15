import { useEffect, useState } from "react"

export default function MethodTag({ method, url }) {
    const [color, setColor] = useState("");

    useEffect(() => {
        switch (method) {
            case "POST":
                setColor("bg-orange-100 text-orange-900");
                break
            case "PUT":
                setColor("bg-green-100 text-green-900");
                break
            case "DELETE":
                setColor("bg-red-100 text-red-900");
                break
            default:
                setColor("bg-blue-100 text-blue-900");
        }
    }, [method])

    return (
        <div className="flex items-center gap-4">
            <p className={`px-2 py-1 ${color} font-bold rounded`}>{method}</p>
            <p className="p-1 bg-slate-100">{url}</p>
        </div>
    )
}
