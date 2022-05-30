import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { login } from "../../Service/Requisitions";
import UserContext from "../../contexts/UserContext";
import AutenticationPages from "../shared/AutenticationPages";

export default function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [load, setLoad] = useState(false);
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });
    function handleLogin(e) {
        e.preventDefault();
        setLoad(true);
        const promise = login(userLogin);
        promise.then((response) => {
            setLoad(false);
            setUser(response.data);
            navigate("/hoje", { replace: true });
        });
        promise.catch((error) => {
            setLoad(false);
            alert(error.response.data.message);
        })
    }
    return(
        <AutenticationPages p="Não tem uma conta? Cadastre-se!" link="/cadastro" onSubmit={handleLogin} load={load}>
            <input 
                type="email" 
                required 
                placeholder="email" 
                value={userLogin.email}
                disabled={load} 
                onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })} />
            <input 
                type="password" 
                required 
                placeholder="senha" 
                value={userLogin.password}
                disabled={load} 
                onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })} />
            <button type="submit" disabled={load}>
                { load ? <ThreeDots color="#FFFFFF" width="51" height="13" /> : "Entrar"}
            </button>
        </AutenticationPages>
    );
}