import {Button} from './styledComponents'

const Languages = props => {
  const {displayButtons, onClickSpecificBtn} = props
  const {id, imageUrl, buttonText} = displayButtons

  const onClickBtn = () => {
    onClickSpecificBtn(id, imageUrl)
  }

  return (
    <>
      <Button onClick={onClickBtn}>{buttonText}</Button>
    </>
  )
}

export default Languages
