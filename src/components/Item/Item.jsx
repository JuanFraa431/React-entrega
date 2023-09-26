import { Link } from "react-router-dom";
import "./index.css"


const Item = ({ id, nombre, precio, descripcion, imagen }) => {
  return (
    <div className="card edit" style={{ width:"18rem", gap:"1px", height:"450px", marginBottom:"15px", backgroundColor:"white"}}>
      <img src={imagen} className="card-img-top" style={{ width:"286px", height:"250px"}} alt="..."/>
        <div className="card-body" style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
          <h6 className="card-title">{nombre}</h6>
          <p className="card-text" style={{fontSize:"12px"}}>{descripcion}</p>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <Link href="#" className="btn btn-primary" ><Link to={`/product/${id}`} style={{color:"black"}}>Ver detalle</Link></Link>
            <p>Precio: ${precio}</p>
          </div>
        </div>
    </div>
  );
};



export default Item;
