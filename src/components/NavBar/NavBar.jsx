export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 flex flex-col gap-4 w-1/6 min-h-screen p-4 bg-black text-slate-200">
        <h3>Routes</h3>
        <ul className="flex flex-col justify-start items-start gap-2">
            <li>Get All Products</li>
            <li>Get One Product</li>
            <li>Create Product</li>
            <li>Update Product</li>
            <li>Delete Product</li>
            <li>Populate Database</li>
        </ul>
    </nav>
  )
}
