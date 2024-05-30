import React, {useState} from 'react'

const Colorpicker = () => {
    let [color, setColor] = useState('#FF4FOO')
  return (
    <div className='color-picker-container'>
      <h1> Color Picker</h1>
      <div className='color-display'>
        
      </div>
          </div>
  )
}

export default Colorpicker
