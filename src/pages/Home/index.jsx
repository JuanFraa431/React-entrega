import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Item from '../../components/Item/Item'
import ItemList from "../../components/ItemList/ItemList";
import { productos } from "../../products";
import { useEffect, useState } from "react";
import UnderNavBar from "../../components/underNavBar/UnderNavBar";
import Carrucel from "../../components/Carrucel/Carrucel";
import Titulo from "../../components/Titulo/Titulo";
import CategoriasDestacadas from "../../components/CategoriasDestacadas/CategoriasDestacadas";
import Titulo2 from "../../components/Titulo2/Titulo2";
import { productosTendecia } from "../../productsTendencia";
import ItemList2 from "../../components/ItemList2/itemList2";
import ItemList3 from "../../components/ItemList3/ItemList3";
import { Marcas } from "../../marcas";
import Titulo3 from "../../components/Titulo3/Titulo3";
import Titulo4 from "../../components/Titulo4/Titulo4";






const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([])
  const [marcas, setMarcas] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setProducts(productos);
      setIsLoading(false)
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setProducts2(productosTendecia);
      setIsLoading(false)
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMarcas(Marcas);
      setIsLoading(false)
    }, 1000);
  }, []);


  return (
    <Layout>
      <UnderNavBar/>
      <Carrucel/>
      <Titulo/>
      <CategoriasDestacadas/>
      <Titulo2/>
      <ItemList2>
      {
            isLoading 
            ? <p>Cargando . . .</p>
            : products2.map(prod => (
                <Item
                imagen={prod.imagen}  
                id={prod.id}
                nombre={prod.nombre}
                precio={prod.precio}
                descripcion={prod.descripcion}
                />
            ))
        }
      </ItemList2>
      <Titulo3/>
      <ItemList3>
      {
            isLoading 
            ? <p>Cargando . . .</p>
            : marcas.map(marca => (

              <img src={marca.imagen} alt="" />

            ))
        }
      </ItemList3>
      <Titulo4/>
      <ItemList>
        {
            isLoading 
            ? <p>Cargando . . .</p>
            : products.map(prod => (
                <Item
                imagen={prod.imagen}  
                id={prod.id}
                nombre={prod.nombre}
                precio={prod.precio}
                descripcion={prod.descripcion}
                />
            ))
        }
      </ItemList>
    </Layout>
  );
};

export default Home;
