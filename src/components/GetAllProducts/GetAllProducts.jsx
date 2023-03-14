import Button from "../Button/Button.jsx"

export default function GetAllProducts({ setResponse }) {

    const getAllProducts = async () => {
        const response = await fetch("https://cda-api.vercel.app/api/products");
        const data = await response.json();
        setResponse(data);
    }

    return (
        <article className="flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-2">
                <h3>Get All Products</h3>
                <p>This endpoint retrieves all coffees in the API</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4>HTTP Request</h4>
                <div>
                    <p>GET</p>
                    <p>https://cda-api.vercel.app/api/products</p>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4>Responses</h4>
                <ul>
                    <li>
                        <p>Code: 200</p>
                        <p>Payload: array with all coffees (object)</p>
                    </li>
                </ul>
            </div>
            <div>
                <Button handleClick={getAllProducts} />
            </div>
        </article>
    )
}
