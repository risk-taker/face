import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Home from './pages/home/Home';
import { CookiesProvider } from "react-cookie";
import { useCookies } from 'react-cookie';
import { Navigate } from "react-router-dom";
import Navigation from './component/Navigation/Navigation';

function App() {
    return (
        <>
            <CookiesProvider>
                <Navigation />
                <Routes>
                    <Route path='/login' element={<Login />} ></Route>
                    <Route path='/signup' element={<SignUp />} ></Route>
                    <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} ></Route>
                </Routes>
            </CookiesProvider>
        </>

    );
}

const ProtectedRoute = ({
    children
}) => {
    const [cookies] = useCookies(['auth']);
    const auth = cookies.Auth;
    console.log(auth);
    if (!auth) {
        console.log("working")
        return <Navigate to={'/login'} replace />;
    }
    if (auth === 'null') {
        return <Navigate to={'/login'} replace />;
    }
    return children;
};

export default App;
