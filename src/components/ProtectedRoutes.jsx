import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProtectedRoutes = () => {
    const userName = useSelector(state => state.user)
    if(userName){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default ProtectedRoutes;