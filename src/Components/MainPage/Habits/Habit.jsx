import styled from "styled-components";
import Weekdays from "./Weekdays";

export default function Habit({ habit, deleteHabit}) {
    return(
        <Container>
            <HabitBox>
                <p>{habit.name}</p>
                <Weekdays habit={habit} nonEditable={true} />
            </HabitBox>   
            <div onClick={deleteHabit}><ion-icon name="trash-outline"></ion-icon></div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 14px 10px 0 15px;
    display: flex;
    justify-content: space-around;
    `;

const HabitBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    p {
        color: #666666;
        font-size: 20px;
        margin-bottom: 10px;
    }
    `;