import Head from 'next/head'
import { useState, useEffect } from 'react'
import Card from '../Components/Card'
import Carousel from '../Components/Carousel'
import List from '../Components/List'

import { getMovies } from '../resources/movieData'



export default function Home() {

  const [movies, setMovies] = useState([])

  useEffect(async () => {
   const movieList = await getMovies()
   setMovies(movieList)
  }, [])



  console.log(movies)
  // const fetchMovies = async() =>{
  //  return await getMovies() 
  // }

  // useEffect(() => {
  //  const lab = fetchMovies()
  //   setMovies(lab)
  // }, [])

  console.log(movies)

  return (
    <div>
     <Head>
       <title>Home</title>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
       <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
       <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
     </Head>
    
   <div className="container" style={{marginTop:'2rem'}}>
     <div className="row">
       <div className="col-lg-3">
         <h1 className="my-4">Shop Name</h1>
         <List />
       </div>
      
       <div className="col-lg-9">
          <Carousel /> 
         <div className="row">
          {movies?.map(movie =>(<Card key={movie.id} movie={movie} />))}
         </div>
       </div>
     </div>
   </div>
   

   </div>
  )
}

