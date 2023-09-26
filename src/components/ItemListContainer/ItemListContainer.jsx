import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { productos } from "../../products";
import UnderNavBar from "../underNavBar/UnderNavBar";
import Carrucel from "../Carrucel/Carrucel";
import "./ItemListContainer.css"
import NavBar from "../Navbar/Navbar";


const ItemListContainer = () => {
  const {categoria} = useParams()
  let listado = []
  const [Category, setItem] = useState({})
  if (categoria != undefined){
    const filtro = productos.filter((cat) => cat.categoria === categoria)
    useEffect(() => {
      setTimeout(() => {
          setItem(filtro)
      }, 1000)
    })
  
    listado = filtro.map(productito => (
        <div className="card edit" style={{ width:"18rem", gap:"1px", height:"450px", marginBottom:"15px", backgroundColor:"white"}}>
            <img src={productito.imagen} className="card-img-top" style={{ width:"286px", height:"250px"}} alt="..."/>
              <div className="card-body" style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                <h6 className="card-title">{productito.nombre}</h6>
                <p className="card-text" style={{fontSize:"12px"}}>{productito.descripcion}</p>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <button className="btn btn-primary" ><Link to={`/product/${productito.id}`} style={{color:"black"}}>Ver detalle</Link></button>
                <p>Precio: ${productito.precio}</p>
              </div>
            </div>
        </div>
      
    )) 
  }else {
    listado = []
  }
  return (
    <>
      <NavBar/>
      <UnderNavBar/>
      <Carrucel/>
      <h3 className="tituloCategoria">{categoria}</h3>
      <div className="contenedor">
        {listado}
      </div>
    
    </>
  );
};

export default ItemListContainer;
