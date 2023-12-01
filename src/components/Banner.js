// import React, { Component } from "react";

// import { movies } from "../moviesData";

// export class Banner extends Component {
//   render() {
//     let movieElem = movies.results[Math.floor(Math.random() * 10)];
//     let backDrop = movieElem.backdrop_path;
//     let title = movieElem.title
//     let description = movieElem.overview;
//     return (
//       <div className="card banner-card">
//         <img
//           src={`https://image.tmdb.org/t/p/original${backDrop}`}
//           className="card-img-top banner-img"
//           alt="..."
//         />

//         <h5 className="card-title banner-title">{title}</h5>
//         <p className="card-text banner-text">
//          {description}
//         </p>
//       </div>
//     );
//   }
// }

// export default Banner;


import React from "react";
import { movies } from "../moviesData";

const Banner = () => {
  let movieElem = movies.results[Math.floor(Math.random() * 10)];
  let backDrop = movieElem.backdrop_path;
  let title = movieElem.title;
  let description = movieElem.overview;

  return (
    <div className="card banner-card">
      <img
        src={`https://image.tmdb.org/t/p/original${backDrop}`}
        className="card-img-top banner-img"
        alt="..."
      />

      <h5 className="card-title banner-title">{title}</h5>
      <p className="card-text banner-text">{description}</p>
    </div>
  );
};

export default Banner;
