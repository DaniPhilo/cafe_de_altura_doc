import CreateProduct from "../CreateProduct/CreateProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import GetAllProducts from "../GetAllProducts/GetAllProducts";
import GetOneProduct from "../GetOneProduct/GetOneProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

export default function Routes({ setResponse }) {

    return (
        <section className="flex flex-col justify-start items-start gap-8 w-main-width ml-navbar-width p-8">
            <h2 className="text-2xl font-medium">API Endpoints</h2>
            <GetAllProducts setResponse={setResponse} />
            <GetOneProduct setResponse={setResponse} />
            <CreateProduct setResponse={setResponse} />
            <UpdateProduct setResponse={setResponse} />
            <DeleteProduct setResponse={setResponse} />
        </section>

    )
}
