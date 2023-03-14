import CreateProduct from "../CreateProduct/CreateProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import GetAllProducts from "../GetAllProducts/GetAllProducts";
import GetOneProduct from "../GetOneProduct/GetOneProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

export default function Routes({ setResponse }) {

    return (
        <section className="w-2/3 ml-[16.6%] p-4">
            <GetAllProducts setResponse={setResponse} />
            <GetOneProduct setResponse={setResponse} />
            <CreateProduct setResponse={setResponse} />
            <UpdateProduct setResponse={setResponse} />
            <DeleteProduct setResponse={setResponse} />
        </section>

    )
}
