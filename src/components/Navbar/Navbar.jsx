import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body me-1" data-bs-theme="dark">
          <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}><img className="imagenLogo" src="../../../images/image-removebg-preview (1).png" alt="" /></Link>
              <div className="collapse navbar-collapse" id="navbarText" style={{display:"flex", justifyContent:"space-between"}}> 
                  <div className="inputBuscar" style={{ display:"flex"}}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"450px"}}></input>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                  </div>
                  <CartWidget/>
              </div>
          </div>
      </nav>
      
  )
}

export default NavBar
