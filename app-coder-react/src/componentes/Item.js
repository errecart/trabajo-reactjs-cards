import React from 'react'
import {Button, Card} from 'react-bootstrap';


const Item = ({item}) => {

  const {name, price, stock, image} = item
  return (
    <Card style={{ width: '18rem', margin:15 }}>
      <Card.Img variant="top" src={image} style={{height: '18rem', width:'18rem'}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <br></br>
        <Card.Text>
          <h5>Price:{price}</h5>
          <br/>
          <h6>Stock:{stock}</h6>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

  )
} 
export default Item