import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { HomePage , ItemDetailPage} from '../pages'
import ItemDetail from '../pages/ItemDetail'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path:'/product/:idProduct',
        element: <ItemDetailPage /> 
    },
    {
        path:'category/:categoria',
        element: <ItemListContainer/>
    }
])

const Navigation = () => {
    return ( 
        <RouterProvider router={routes}/>
    )
}

export default Navigation