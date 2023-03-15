import logo from "../../assets/img/logo.png"

export default function NavBar() {

  return (
    <nav className="fixed top-0 left-0 flex flex-col gap-8 w-navbar-width min-h-screen p-4 bg-black text-slate-200">
      <a href="https://www.gammatech.school/" target={"_blank"}><img src={logo} alt="" /></a>
      <h3 className="text-2xl font-medium">Routes</h3>
      <ul className="flex flex-col justify-start items-start gap-3">
        <a href="#get-all-products" className="cursor-pointer hover:text-white">Get All Products</a>
        <a href="#get-one-product" className="hover:text-white">Get One Product</a>
        <a href="#create-product" className="cursor-pointer hover:text-white">Create Product</a>
        <a href="#update-product" className="cursor-pointer hover:text-white">Update Product</a>
        <a href="#delete-product" className="cursor-pointer hover:text-white">Delete Product</a>
      </ul>
    </nav>
  )
}
