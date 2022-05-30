import styled from "styled-components";

export default function Body(props) {
    return(
        <Container>
            {props.children}
        </Container>
    );
}

const Container = styled.div`
    padding: 0 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 98px;
    `;