import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../../contexts/UserContext";
import ProgressContext from "../../../contexts/ProgressContext";
import { checkHabit, uncheckHabit } from "../../../Service/Requisitions";

export default function TrackedHabit(props) {
    const { user } = useContext(UserContext);
    const { setPercentage } = useContext(ProgressContext);
    function toggleChecked() {
        if (props.habit.done === false) {
            const promise = checkHabit(user.token ,props.habit.id);
            promise.then(() => {
                props.setReload(!props.reload);
            });
        } else {
            const promise = uncheckHabit(user.token, props.habit.id);
            promise.then(() => {
                props.setReload(!props.reload);
            });
        }
    }

    return (
        <Container>
            <Text>
                <p>{props.habit.name}</p>
                <p>
                    Sequência atual:  <Current checked={props.habit.done}>{props.habit.currentSequence} dias</Current>
                </p>
                <br />
                <p>
                    Seu recorde: <Highest currentSequence={props.habit.currentSequence} highestSequence={props.habit.highestSequence}>{props.habit.highestSequence} dias</Highest>
                </p>
            </Text>
            <Button checked={props.habit.done} onClick={toggleChecked}>
                <ion-icon name="checkmark"></ion-icon>
            </Button>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 94px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    padding: 13px 13px 0 15px;
    margin-bottom: 10px;
    `;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    p {
        color: #666666;
    }
    p:first-child {
        font-size: 20px;
        margin-bottom: 8px;
    }
    p:nth-child(2) {
        font-size: 13px;
    }
    p:last-child {
        font-size: 13px;
    }
    `;

const Button = styled.div`
    width: 69px;
    height: 69px;
    background-color: ${props => props.checked ? "#8FC549" : "#EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    ion-icon {
        width: 50px;
        height: 43px;
        --ionicon-stroke-width: 85px;
        color: #FFFFFF;
    }
    `;

const Current = styled.span`
        color: ${props => props.checked ? "#8FC549" : "#666666"};;
    `;

const Highest = styled.span`
     font-size: 13px;
     color: ${({currentSequence,  highestSequence}) => currentSequence === highestSequence && highestSequence !== 0 ? "#8FC549" : "#666666"};
    `;