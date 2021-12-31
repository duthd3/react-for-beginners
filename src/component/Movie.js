import propTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, year, summary, genres }){//이 component들을 부모로 부터 받아온다.
    return <div>
    <img src={coverImg} alt={title}></img>
    <h2 >
      <Link to={`/movie/${id}`}>{title}</Link>({year})
    </h2>

    <p>{summary}</p>
    <ul>
      {genres.map(g=><li key={g}>{g}</li>)}
    </ul>
    <hr></hr>
  </div>
  
}
Movie.propTypes = {
    id : propTypes.number.isRequired,
    coverImg : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    year : propTypes.number.isRequired,
    summary : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;