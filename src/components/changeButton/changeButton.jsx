import {useState} from "react"

const ChangeBT = ({tr}) => {

  const [background, setBackground] = useState(tr)

  const changeColor = () => {
    setBackground(!background)
    console.log(background);
  }



  return (
    <button onClick={changeColor}>cambio</button>
    // <h1>hola</h1>
  )
}

export default ChangeBT;