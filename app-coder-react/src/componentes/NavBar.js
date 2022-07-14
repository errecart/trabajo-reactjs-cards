import React from "react";
import styled from "styled-components";
import CardWiget from "./CardWiget";


function NavBar(){
    return(
<>
<NavConteiner style={{display:"flex",justifyContent:"space-around",alignContent:"center",backgroundColor:"black",height:75}}>
   
<h2 style={{color:"white",fontSize:30}}><span>Titulo E-comerce</span></h2>
<div style={{margin:15,letterSpacing:3,fontSize:20,marginLeft:650}}>
<a href="#" style={{textDecoration:"none", margin:9, color:"violet"}}>Home</a>
<a href="#" style={{textDecoration:"none", margin:9, color:"violet"}}>Product</a>
<a href="#" style={{textDecoration:"none", margin:9, color:"violet"}}>Us</a>
<a href="#" style={{textDecoration:"none", margin:9, color:"violet"}}>Contact</a>
</div>
<CardWiget/>
</NavConteiner>
</>
    );
}
export default NavBar
const NavConteiner = styled.nav`
h2{
    font-weight:400;
    span{
        font-weight:bold; 
    }
}
padding:1rem;
background-color:'red':
display:flex:
justify-content:space-between:
a{
    text-decoration:'none';
    color:white;
    font-size:400;
}
`