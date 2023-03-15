import { useState } from "react";
import Button from "../Button/Button"
import MethodTag from "../MethodTag/MethodTag";

export default function DeleteProduct({ setResponse }) {
    
    const [coffeeId, setCoffeeId] = useState("");

    const handleChange = (event) => {
        setCoffeeId(event.target.value);
    }

    const deleteProduct = async () => {
        const response = await fetch("https://cafe-de-altura.vercel.app/api/products/delete", {
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
    <article id="delete-product" className="flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-xl font-medium">Delete Product</h3>
                <p>This endpoint deletes a product by id.</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4 className="text-lg">HTTP Request</h4>
                <MethodTag method="DELETE" url="https://cafe-de-altura.vercel.app/api/products/delete" />
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4 className="text-lg">Request Body</h4>
                <form className="grid grid-cols-2 gap-y-2 pl-4">
                    <label htmlFor="id">_id:</label>
                    <input type="text" name="id" placeholder="coffee id string" className="p-1 border border-slate-400 rounded" onChange={handleChange} value={coffeeId} />
                </form>
            </div>

            <div className="flex flex-col justify-start items-start gap-2">
                <h4 className="text-lg">Responses</h4>
                <ul className="flex flex-col gap-2 pl-4">
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
