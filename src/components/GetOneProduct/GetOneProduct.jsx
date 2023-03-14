import { useState } from "react";
import Button from "../Button/Button";

export default function GetOneProduct({ setResponse }) {

    const [query, setQuery] = useState("");
    const [idInput, setIdInput] = useState("");
    const [brandInput, setBrandInput] = useState("");

    const getOneProduct = async () => {
        const response = await fetch(`https://cda-api.vercel.app/api/products/coffee/?${query}`);
        const data = await response.json();
        setResponse(data);
    }

    const handleChange = (event, name) => {
        if (name === "id") {
            setIdInput(event.target.value);
        } else {
            setBrandInput(event.target.value);
        }
        if (event.target.value === "") {
            setQuery("")
        } else {
            setQuery(`${name}=${event.target.value}`)
        }
    }

    return (
        <article className="flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-2">
                <h3>Get One Product</h3>
                <p>This endpoint searches any coffee by ID or BRAND</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4>HTTP Request</h4>
                <div>
                    <p>GET</p>
                    <p>https://cda-api.vercel.app/api/products/coffee/?&#123;id or brand&#125;</p>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4>Query Parameters</h4>
                <form className="grid grid-cols-2 gap-y-2">
                        <label htmlFor="id">id:</label>
                        <input type="text" name="id" placeholder="coffee id string" onChange={(event) => handleChange(event, "id")} value={idInput} className="p-1 border border-slate-400 rounded" />
                        <label htmlFor="brand">brand:</label>
                        <input type="text" name="brand" placeholder="coffee brand string" onChange={(event) => handleChange(event, "brand")} value={brandInput} className="p-1 border border-slate-400 rounded" />
                </form>
            </div>

            <div className="flex flex-col justify-start items-start gap-2">
                <h4>Responses</h4>
                <ul>
                    <li>
                        <p>Code: 200</p>
                        <p>Payload: array with all coffees (object)</p>
                    </li>
                    <li>
                        <p>Code: 400</p>
                        <p>Payload: invalid parameters</p>
                    </li>
                </ul>
            </div>
            <div></div>
            <div>
                <Button handleClick={getOneProduct} />
            </div>
        </article>
    )
}
