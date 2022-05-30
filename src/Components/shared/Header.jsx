import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (user === "") {
            navigate("/");
        }
    }, [user, navigate]);
    return(
        <Container>
            <h1>TrackIt</h1>
            <img src={user.image} alt="Foto do Usuário" />
        </Container>
    );
}

const Container = styled.header`
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 18px 0 18px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 40px;
        font-family: "Playball", cursive;
        color: #FFFFFF;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 98px;
    }
    `;