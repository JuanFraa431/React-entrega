import {Link} from "react-router-dom"

const UnderNavBar = () => {
    return (
        <div className="navbar navbar-expand-lg bg-dark border-bottom border-body me-1 underNavBar" data-bs-theme="dark" >
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{display:"flex", width:"100%", alignItems:"center", justifyContent:"space-around"}}>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/"}>Todos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Pc-armadas">Armadas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Procesadores">Procesadores</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Motherboards">Mothers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Placas-de-Video">Graficas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Memorias-RAM">Ram</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Discos-Solidos">Discos Solidos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Discos-Rigidos">Discos Rigidos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Periféricos">Periféricos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Monitores">Monitores</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Notebooks-gamers">Notebooks gamers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Notebooks-no-gamers">Notebooks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Sillas-Gamer">Sillas</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UnderNavBar;

