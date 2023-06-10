import Slider from 'react-slick'
import MovieCard from '../MovieItem'
import './index.css'

const MovieSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="slider-container">
      <div className="action-container">
        <h1 className="heading-title">Action Movies</h1>
        <Slider {...settings}>
          {actionMovies.map(eachCard => (
            <MovieCard eachCard={eachCard} key={eachCard.id} />
          ))}
        </Slider>
      </div>
      <div className="action-container">
        <h1 className="heading-title">Comedy Movies</h1>
        <Slider {...settings}>
          {comedyMovies.map(eachCard => (
            <MovieCard eachCard={eachCard} key={eachCard.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default MovieSlider
