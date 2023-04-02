import { useEffect } from "react"
import { Link } from "react-router-dom"
import pageNotFoundImage from "../asset/pageNotFoundImage.png"

export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found/CineView`
  });

  return (
    <main >
      <section className='flex flex-col justify-top px-2 min-h-screen'>
        <div className='flex flex-col items-center my-4'>
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404 Oops!</p>
          <div className="max-w-sm max-h-min">
          <img className="rounded" src= {pageNotFoundImage} alt="Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
          <button className="w-64 text-white text-xl bg-blue-500 rounded-lg py-2.5 px-5 mr-2 mb-2">Back to CineView</button>
          </Link>
          
        </div>
      </section>
    </main>
  )
}
