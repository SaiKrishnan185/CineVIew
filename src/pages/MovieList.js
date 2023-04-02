import { useEffect } from "react";
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"

export const MovieList = ({apiPath, title}) => {

  // const [movies, setMovies] = useState([])

  const { data:movies } = useFetch(apiPath)

  useEffect(() => {
    document.title = `${title}/CinematView`
  });


  return (
    <main>
      <section className='max-w-7xl mx-auto py-7 ' >
        <div className='flex justify-center xl:justify-start flex-wrap'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }
        </div>
      </section>
    </main>
  )
}
