import { useState } from "react"
import Button from "../Button/Button"

export default function CreateProduct({ setResponse }) {

    const [data, setData] = useState({
        brand: "",
        price: "",
        img_url: "",
        available: ""
    });

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const createProduct = async () => {
        const parsedData = {
            ...data,
            available: data.available === "true" ? true : false
        }
        const response = await fetch("https://cda-api.vercel.app/api/products/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(parsedData)
        });
        const coffee = await response.json();
        setResponse(coffee);
    }

    return (
        <article className="flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-2">
                <h3>Create Product</h3>
                <p>This endpoint creates a coffee object</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4>HTTP Request</h4>
                <div>
                    <p>POST</p>
                    <p>https://cda-api.vercel.app/api/products/create</p>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4>Request Body</h4>
                <form className="grid grid-cols-2 gap-y-2">
                    <label htmlFor="brand">brand:</label>
                    <input type="text" name="brand" placeholder="coffee brand string" className="p-1 border border-slate-400 rounded" onChange={handleChange} value={data.brand} />
                    <label htmlFor="price">price:</label>
                    <input type="text" name="price" placeholder="coffee price number" className="p-1 border border-slate-400 rounded" onChange={handleChange} value={data.price} />
                    <label htmlFor="img_url">img_url:</label>
                    <input type="text" name="img_url" placeholder="coffee image url" className="p-1 border border-slate-400 rounded" onChange={handleChange} value={data.img_url} />
                    <label htmlFor="available">available:</label>
                    <input type="text" name="available" placeholder="coffee availability boolean" className="p-1 border border-slate-400 rounded" onChange={handleChange} value={data.available} />
                </form>
            </div>

            <div className="flex flex-col justify-start items-start gap-2">
                <h4>Responses</h4>
                <ul>
                    <li>
                        <p>Code: 201</p>
                        <p>Payload: created coffee object</p>
                    </li>
                    <li>
                        <p>Code: 400</p>
                        <p>Payload: invalid parameters</p>
                    </li>
                </ul>
            </div>
            <div></div>
            <div>
                <Button handleClick={createProduct} />
            </div>
        </article>
    )
}
