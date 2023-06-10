import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieCard = props => {
  const {eachCard} = props
  const {thumbnailUrl, videoUrl} = eachCard
  return (
    <div>
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <>
            <div className="close-container">
              <button
                type="button"
                className="trigger-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="cross-symbol" />
              </button>
            </div>
            <div className="video-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieCard
