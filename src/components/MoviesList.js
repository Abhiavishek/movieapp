// import React, { Component } from "react";
// //import { movies } from "../moviesData";
// import axios from 'axios'

// export class MoviesList extends Component {
//   constructor(){
//     super()

//     this.state = {
//       hover: "",
//       parr : [1],
//       movies : [],
//       currPage : 1,
//       favourites :[]

//     }
//   }

//  async componentDidMount(){
//           const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3a884a6e8ca9eb36e1e4f9bb1c757519&language=en-US&page=${this.state.currPage}
//           `)
//           let movieData = res.data
//           console.log(movieData)

//           this.setState({
//             movies : [...movieData.results]
//           })
//   }

//   changeMovies = async()=>{
//     const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3a884a6e8ca9eb36e1e4f9bb1c757519&language=en-US&page=${this.state.currPage}
//     `)
//     let movieData = res.data
//     console.log(movieData)

//     this.setState({
//       movies : [...movieData.results]
//     })
//   }

// handleNext=()=>{
//     let tempArr = []
//     for(let i=1 ; i<this.state.parr.length + 1; i++){
//       tempArr.push(i)
//     }

//     this.setState({
//       parr:[...tempArr],
//       currPage:this.state.currPage+1
//     })
//     this.changeMovies()
// }

// handlePrevious=()=>{
//   if(this.state.currPage!=1){
//     this.setState({
//       currPage : this.state.currPage-1
//     } , this.changeMovies)
//   }
// }

// handlePageClick =(value)=>{
//   if(value!=this.state.currPage){
//     this.setState({
//       currPage : value
//     } , this.changeMovies)
//   }
// }

// handleFavourites=(movieObj)=>{
//   let oldData = JSON.parse(localStorage.getItem('movies-app') || '[]')

//   if(this.state.favourites.includes(movieObj.id)){
//     oldData = oldData.filter((movie)=> movie.id != movieObj.id)
//   }

//   else{
//     oldData.push(movieObj)
//   }
//   localStorage.setItem("movies-app" , JSON.stringify(oldData))
//   console.log(oldData)
//   this.handleFavouritesState()
// }

// handleFavouritesState =()=>{
//   let oldData =JSON.parse(localStorage.getItem('movies-app') || '[]')
//   let temp = oldData.map((movie)=>movie.id)

//   this.setState({
//     favourites : [...temp]
//   })
// }


//   render() {
//     //let moviesArr = movies.results;
//     // console.log(moviesArr)
//     return (
//       // <div>{
//       //   moviesArr.map((moviesElem)=>(
//       //     <h1>{moviesElem.title}</h1>
//       //   ))
//       //   }
//       //   </div>
//       <div>
//         <div>
//           <h3 className="text-center">
//             <strong>Trending</strong>
//           </h3>
//         </div>

//         <div className="movies-list">
//           {this.state.movies.map((movieElem) => (
//             <div className="card movie-card" onMouseEnter={() => this.setState({ hover: movieElem.id})}
//             onMouseLeave={() => this.setState({hover: ""})}>
//               <img
//                 src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`}
//                 style={{ height: "40vh", width: "20vw" }}
//                 className="card-img-top movie-img"
//                 alt="..."
//               />

//               <h5 className="card-title movie-title">{movieElem.title}</h5>

//               <div
//                 className="button-wrapper"
//                 style={{ display: "flex", justifyContent: "center" }}
//               >
//                {
//                  this.state.hover == movieElem.id &&
//                   <a  className="btn btn-primary movies-button text-center"
//                     onClick={()=>this.handleFavourites(movieElem)}>

                    
//                     {this.state.favourites.includes(movieElem.id)? "Remove from Favourites" : 'Add to Favourites'}
                  
//                 </a>
                 
//                }
//               </div>
//             </div>
//           ))}
//         </div>
//         <div style={{display : 'flex' , justifyContent: 'center'}}>
//           <nav aria-label="Page navigation example">
//             <ul className="pagination">
//               <li className="page-item">
//                 <a className="page-link" onClick={this.handlePrevious} href="#">
//                   Previous
//                 </a>
//               </li>


//               {
//                 this.state.parr.map((value)=>(
//                   <li className="page-item">
//                 <a className="page-link" onClick={()=> this.handlePageClick(value)} href="#">
//                   {value}
//                 </a>
//               </li>
//                 ))
//               }


              
              
//               <li className="page-item">
//                 <a className="page-link" onClick={this.handleNext} href="#">
//                   Next
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     );
//   }
// }

// export default MoviesList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MoviesList = () => {
  const [hover, setHover] = useState("");
  const [parr, setParr] = useState([1]);
  const [movies, setMovies] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [favourites, setFavourites] = useState([]);

  const changeMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3a884a6e8ca9eb36e1e4f9bb1c757519&language=en-US&page=${currPage}`);
    let movieData = res.data;
    setMovies([...movieData.results]);
  };

  const handleNext = () => {
    let tempArr = [];
    for (let i = 1; i < parr.length + 1; i++) {
      tempArr.push(i);
    }

    setParr([...tempArr]);
    setCurrPage(currPage + 1);
    changeMovies();
  };

  const handlePrevious = () => {
    if (currPage !== 1) {
      setCurrPage(currPage - 1);
      changeMovies();
    }
  };

  const handlePageClick = (value) => {
    if (value !== currPage) {
      setCurrPage(value);
      changeMovies();
    }
  };

  const handleFavourites = (movieObj) => {
    let oldData = JSON.parse(localStorage.getItem('movies-app') || '[]');

    if (favourites.includes(movieObj.id)) {
      oldData = oldData.filter((movie) => movie.id !== movieObj.id);
    } else {
      oldData.push(movieObj);
    }

    localStorage.setItem("movies-app", JSON.stringify(oldData));
    handleFavouritesState();
  };

  const handleFavouritesState = () => {
    let oldData = JSON.parse(localStorage.getItem('movies-app') || '[]');
    let temp = oldData.map((movie) => movie.id);

    setFavourites([...temp]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3a884a6e8ca9eb36e1e4f9bb1c757519&language=en-US&page=${currPage}`);
      let movieData = res.data;
      setMovies([...movieData.results]);
    };

    fetchData();
  }, [currPage]);

  return (
    <div>
      <div>
        <h3 className="text-center">
          <strong>Trending</strong>
        </h3>
      </div>

      <div className="movies-list">
        {movies.map((movieElem) => (
          <div
            className="card movie-card"
            onMouseEnter={() => setHover(movieElem.id)}
            onMouseLeave={() => setHover("")}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`}
              style={{ height: "40vh", width: "20vw" }}
              className="card-img-top movie-img"
              alt="..."
            />

            <h5 className="card-title movie-title">{movieElem.title}</h5>

            <div
              className="button-wrapper"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {hover === movieElem.id && (
                <button
                  className="btn btn-primary movies-button text-center"
                  onClick={() => handleFavourites(movieElem)}
                >
                  {favourites.includes(movieElem.id)
                    ? "Remove from Favourites"
                    : 'Add to Favourites'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link" onClick={handlePrevious}>
                Previous
              </button>
            </li>

            {parr.map((value) => (
              <li className="page-item" key={value}>
                <button
                  className="page-link"
                  onClick={() => handlePageClick(value)}
                >
                  {value}
                </button>
              </li>
            ))}

            <li className="page-item">
              <button className="page-link" onClick={handleNext}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MoviesList;

