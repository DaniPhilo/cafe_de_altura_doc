import { useState } from "react";
import Button from "../Button/Button"

export default function DeleteProduct({ setResponse }) {
    
    const [coffeeId, setCoffeeId] = useState("");

    const handleChange = (event) => {
        setCoffeeId(event.target.value);
    }

    const deleteProduct = async () => {
        const response = await fetch("https://cda-api.vercel.app/api/products/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"_id": coffeeId})
        });
        const coffee = await response.json();
        setResponse(coffee);
    }

  return (
    <article className="flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-2">
                <h3>Delete Product</h3>
                <p>This endpoint deletes a product by id</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4>HTTP Request</h4>
                <div>
                    <p>DELETE</p>
                    <p>https://cda-api.vercel.app/api/products/delete</p>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4>Request Body</h4>
                <form className="grid grid-cols-2 gap-y-2">
                    <label htmlFor="id">_id:</label>
                    <input type="text" name="id" placeholder="coffee id string" className="p-1 border border-slate-400 rounded" onChange={handleChange} value={coffeeId} />
                </form>
            </div>

            <div className="flex flex-col justify-start items-start gap-2">
                <h4>Responses</h4>
                <ul>
                    <li>
                        <p>Code: 200</p>
                        <p>Payload: deleted coffee object or null if coffee doesn`t exist</p>
                    </li>
                    <li>
                        <p>Code: 400</p>
                        <p>Payload: invalid parameters</p>
                    </li>
                </ul>
            </div>
            <div></div>
            <div>
                <Button handleClick={deleteProduct} />
            </div>
        </article>
  )
}
