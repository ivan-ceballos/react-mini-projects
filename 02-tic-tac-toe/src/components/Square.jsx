export const Square = ({ value, index, updateBoard, selected}) => {
  const className = `square ${selected ? 'selected' : ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {value}
    </div>
  )
}