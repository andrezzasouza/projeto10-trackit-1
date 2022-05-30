import styled from "styled-components";
import Body from "../shared/Body";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function History() {
    return(
        <>
            <Header />
            <Body>
                <Title>
                    <h2>Histórico</h2>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </Title>
            </Body>
            <Footer />
        </>
    );
}

const Title = styled.div`
    h2 {
        color: #126BA5;
        font-size: 23px;
        margin-bottom: 18px;
    }
    p {
        color: #666666;
        font-size: 18px;
    }
    `;