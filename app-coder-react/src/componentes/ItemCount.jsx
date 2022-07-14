import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const suma = () => {
        if(count < stock){
           setCount(count + 1) 
        }else{
            alert("objetos maximos alcanzados")
        }
    }
    const resta = () => {
        if(count > initial){
            setCount(count - 1) 
         }else{
            alert(`compra minima: ${initial}`)
        }
    }
  return (
    <div>
     <h2>{count}</h2>
     <button onClick={suma}>+</button>
     <button onClick={resta}>-</button>
     <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount
