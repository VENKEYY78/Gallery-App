import './index.css'

const ThumbnailItem = props => {
  const {eachImageDetails, updatePhoto, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImageDetails

  const onClickThumbnail = () => {
    updatePhoto(id)
  }

  const ActiveImage = isActive ? 'btn-buttom' : ''

  console.log(isActive)

  return (
    <li>
      <button type="button" className="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumb-nail ${ActiveImage}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
