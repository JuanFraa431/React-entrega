import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { productos } from "../../products";
import Layout from "../../components/Layout/Layout";
import Filtro from "../../components/Filtro/Filtro";

const ItemDetail = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const searchProduct = productos.find(
    (prod) => prod.id === parseInt(idProduct)
  );

  useEffect(() => {
    setTimeout(() => {
      console.log(searchProduct);
      setProduct(searchProduct);
      setIsLoading(false);
    }, 1000);
  }, []);


      return (
        <Layout>
          {isLoading ? (
            <p>Cargando . .</p>
          ) : (
            <>
                  <div className="card edit" style={{ width:"18rem", gap:"1px", height:"450px", marginBottom:"15px", backgroundColor:"white"}}>
              <img src={product.imagen} className="card-img-top" style={{ width:"286px", height:"250px"}} alt="..."/>
                <div className="card-body" style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                  <h6 className="card-title">{product.nombre}</h6>
                  <p className="card-text" style={{fontSize:"12px"}}>{product.descripcion}</p>
                  <div style={{display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <p>Precio: ${product.precio}</p>
                  </div>
                </div>
            </div>
              <h3>
                ir a <Link to={"/"}>Home</Link>
              </h3>
            </>
          )}
        </Layout>
      )
}


export default ItemDetail;




