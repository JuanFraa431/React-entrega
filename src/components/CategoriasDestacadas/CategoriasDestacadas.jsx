import "./CategoriasDestacadas.css"
import { Link } from "react-router-dom"

const CategoriasDestacadas = () => {
    return (
        <div className="categorias">
            <Link href=""><img src="../../../images/public1.webp" alt="" /></Link>
            <Link href=""><img src="../../../images/public2.webp" alt="" /></Link>
            <Link href=""><img src="../../../images/public3.webp" alt="" /></Link>
            <Link href=""><img src="../../../images/public4.webp" alt="" /></Link>
            <Link href=""><img src="../../../images/public5.webp" alt="" /></Link>
        </div>
    )
}

export default CategoriasDestacadas
