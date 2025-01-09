
interface colorTypes {
    handleColorChange: () => void,
    color: string
}
const ChangeBackgroundColorTask = ({handleColorChange, color}: colorTypes ) => {
  return (
    <div>
      <h1>
        Hello from changeColor
      </h1>

      <button>Color</button>
      <input type="color" value={color} onChange={handleColorChange} name="color" />
    </div>
  )
}

export default ChangeBackgroundColorTask
