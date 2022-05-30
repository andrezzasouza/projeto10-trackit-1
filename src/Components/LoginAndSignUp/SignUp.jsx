import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { register } from "../../Service/Requisitions";
import AutenticationPages from "../shared/AutenticationPages";

export default function SignUp() {
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        email: "",
        name: "",
        image: "",
        password: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        setLoad(true);
        const promise = register(newUser);
        promise.then(() => {
            setLoad(false);
            alert("Cadastrado com Sucesso");
            navigate("/", {replace: true})
        });
        promise.catch((error) => {
            setLoad(false);
            alert(error.response.data.message);
        });
    }

    return(
    <AutenticationPages p="Já tem uma conta? Faça login!" link="/" onSubmit={handleSubmit} load={load}>    
            <input 
                type="email" 
                required 
                placeholder="email" 
                value={newUser.email}
                disabled={load} 
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
            <input 
                type="password" 
                required 
                placeholder="senha" 
                value={newUser.password}
                disabled={load} 
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
            <input 
                type="text" 
                required 
                placeholder="nome" 
                value={newUser.name}
                disabled={load} 
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
            <input 
                type="url" 
                required 
                placeholder="foto" 
                pattern="(http)?s?:?(\/\/.*\.(?:png|jpg|jpeg|gif|png|svg))" 
                value={newUser.image}
                disabled={load} 
                onChange={(e) => setNewUser({ ...newUser, image: e.target.value })} />
            <button type="submit" disabled={load}>
                {load ? <ThreeDots color="#FFFFFF" width="51" height="13" /> : "Cadastrar"}
            </button>
    </AutenticationPages>
    );
}