import { useState } from "react"
import Button from "../Button/Button"
import MethodTag from "../MethodTag/MethodTag";

export default function UpdateProduct({ setResponse }) {
    const [coffeeId, setCoffeeId] = useState({
        _id: ""
    });
    const [data, setData] = useState({
        brand: "",
        price: "",
        img_url: "",
        available: ""
    });

    const handleChange = (event, key = "data") => {
        if (key === "id") {
            setCoffeeId({
                ...coffeeId,
                _id: event.target.value
            })
        } else {
            setData({
                ...data,
                [event.target.name]: event.target.value
            })
        }
    }

    const updateProduct = async () => {
        const parsedData = {
            ...data,
            available: data.available === "true" ? true : false
        }
        const response = await fetch("https://cafe-de-altura.vercel.app/api/products/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: coffeeId, data: parsedData })
        });
        const coffee = await response.json();
        setResponse(coffee);
    }

    return (
        <article id="update-product" className="flex flex-col justify-start items-start gap-4 w-full pb-4 border-b">
            <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-xl font-medium">Update Product</h3>
                <p>This endpoint updates an existing coffee object.</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4 className="text-lg">HTTP Request</h4>
                <MethodTag method="PUT" url="https://cafe-de-altura.vercel.app/api/products/update" />
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4 className="text-lg">Request Body</h4>
                <form className="flex flex-col justify-start items-start gap-2 pl-4">
                    <h5>id:</h5>
                    <div className="grid grid-cols-2 gap-y-2 ml-8">
                        <label htmlFor="id">_id:</label>
                        <input type="text" name="id" placeholder="coffee id string" className="p-1 border border-slate-400 rounded" onChange={(event) => handleChange(event, "id")} value={coffeeId["_id"]} />
                    </div>
                    <h5>data:</h5>
                    <div className="grid grid-cols-2 gap-y-2 ml-8">
                        <label htmlFor="brand">brand:</label>
                        <input type="text" name="brand" placeholder="coffee brand string" className="p-1 border border-slate-400 rounded" onChange={handleChange} value={data.brand} />
                        <label htmlFor="price">price:</label>
                        <input type="text" name="price" placeholder="coffee price number" className="p-1 border border-slate-400 rounded" onChange={handleChange} value={data.price} />
                        <label htmlFor="img_url">img_url:</label>
                        <input type="text" name="img_url" placeholder="coffee image url" className="p-1 border border-slate-400 rounded" onChange={handleChange} value={data.img_url} />
                        <label htmlFor="available">available:</label>
                        <input type="text" name="available" placeholder="coffee availability boolean" className="p-1 border border-slate-400 rounded" onChange={handleChange} value={data.available} />
                    </div>
                </form>
            </div>

            <div className="flex flex-col justify-start items-start gap-2">
                <h4 className="text-lg">Responses</h4>
                <ul className="flex flex-col gap-2 pl-4">
                    <li>
                        <p>Code: 200</p>
                        <p>Payload: updated coffee object</p>
                    </li>
                    <li>
                        <p>Code: 400</p>
                        <p>Payload: invalid parameters</p>
                    </li>
                </ul>
            </div>
            <div></div>
            <div>
                <Button handleClick={updateProduct} />
            </div>
        </article>
    )
}
