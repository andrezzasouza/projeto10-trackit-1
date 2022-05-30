import styled from "styled-components";
import { useContext } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import ProgressContext from "../../contexts/ProgressContext";

export default function Footer() {
    const { percentage } = useContext(ProgressContext);
    return(
        <Container>
            <Link to="/habitos"><p>Hábitos</p></Link>
            <div>
                <CircularProgressbarWithChildren
                    value={percentage}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    strokeLinecap: "round",
                    })}>
                        <Link to="/hoje"><p>Hoje</p></Link>
                    </CircularProgressbarWithChildren>
            </div>
            <Link to="/historico"><p>Hitórico</p></Link>
        </Container>
    );
}

const Container = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    height: 70px;
    width: 100%;
    padding: 0 31px 0 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        text-decoration: none;
    }
    p {
        font-size: 18px;
        color: #52B6FF;
    }
    div {
        width: 91px;
        height: 91px;
        margin-bottom: 40px;
        p {
            color: #FFFFFF;
            margin-top: -10px;
        }
    }
    `;