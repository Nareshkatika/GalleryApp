// Write your code here.
import './index.css'

const Solution = props => {
  const {items, displayImg} = props
  const {id, thumbnailUrl, thumbnailAltText} = items

  const ButtonEl = () => {
    displayImg(id)
  }

  return (
    <li className="listEl">
      <button onClick={ButtonEl} type="button">
        <img alt={thumbnailAltText} src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default Solution
