import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import Item from './Item'


 const ItemListConteiner2 = () => {
  const [items, setItems] = useState([])

  const productos = [
    {id:1, name:"Hamburguesa", price: 100, stock: 10, image:"https://assets.unileversolutions.com/recipes-v2/231570.png"},
    {id:2, name:"Pancake", price: 200, stock: 20, image:"https://cdn.kiwilimon.com/recetaimagen/374/th5-640x640-2622.jpg"},
    {id:3, name:"Pancho", price: 300, stock: 30, image:"https://cdn.cienradios.com/wp-content/uploads/sites/13/2020/04/Panchos-argentinos-nota.jpg"},
    {id:4, name:"Torta de Chocolate", price: 400, stock: 40, image:"https://cocinerosargentinos.com/content/recipes/original/recipes.12186.jpeg"}
  ]

  const task = new Promise((res, rej) =>{
    setTimeout(() => {
      res(productos)
    },2000 )
  })

  useEffect(() =>{
    task
    .then(res => setItems(res))
    .catch(error =>console.log(error))
  },[])


  return (
    <div>
      <ItemList items={items}/>
    </div>
  )
 }



export default ItemListConteiner2


