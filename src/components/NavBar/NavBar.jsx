import logo from "../../assets/img/logo.png"

export default function NavBar() {

  return (
    <nav className="fixed top-0 left-0 flex flex-col gap-8 w-navbar-width min-h-screen p-4 bg-black text-slate-200">
      <img src={logo} alt="" />
      <h3 className="text-2xl font-medium">Routes</h3>
      <ul className="flex flex-col justify-start items-start gap-2">
        <a href="#get-all-products" className="cursor-pointer">Get All Products</a>
        <a href="#get-one-product">Get One Product</a>
        <a href="#create-product" className="cursor-pointer">Create Product</a>
        <a href="#update-product" className="cursor-pointer">Update Product</a>
        <a href="#delete-product" className="cursor-pointer">Delete Product</a>
        <a href="#populate-database" className="cursor-pointer">Populate Database</a>
      </ul>
    </nav>
  )
}
