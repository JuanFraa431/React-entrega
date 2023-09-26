import Navbar from "../Navbar/Navbar"

const Layout = ({children})=> {
 return (
    <>
    <Navbar />
    <div style={{padding:"0px 0px"}}>
        {children}
    </div>
    </>
)
}

export default Layout