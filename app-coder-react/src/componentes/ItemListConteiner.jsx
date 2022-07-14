import React from 'react'
import  ItemCount  from './ItemCount'


const ItemListConteiner = () => {
  const onAdd = (count) =>{
    alert("compraste:" + count)
  }
  return (
    <div>
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListConteiner