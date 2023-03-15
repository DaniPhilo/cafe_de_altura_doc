export default function Hero() {
  return (
    <header className="flex flex-col justify-start items-start gap-2 w-main-width ml-navbar-width p-8">
        <h1 className="text-5xl font-bold">Café de Altura Docs</h1>
        <h2 className="text-2xl font-medium">Welcome to the documentation of the Café de Altura API.</h2>
        <p>Café de Altura is a Frontend project that simulates a professional coffee e-commerce. It is designed and developed by <a href="https://www.gammatech.school/" target={"_blank"} className="text-blue-700 font-medium underline hover:text-red-500">GammaTech School</a> for its students of the <span className="font-medium">Frontend Developer Bootcamp</span>. As part of the project, it provides a <span className="font-medium">REST API</span> to manage the site's products content. Here you will find the documentation of said API, all the endpoints, and a testing framework to get used to its data structures.</p>
    </header>
  )
}
