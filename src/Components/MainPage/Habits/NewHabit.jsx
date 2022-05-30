import styled from "styled-components";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../../contexts/UserContext";
import { postHabits } from "../../../Service/Requisitions";
import Weekdays from "./Weekdays";

export default function NewHabit({habit, setNewHabit , setHabit, reload, setReload }) {
    const { user } = useContext(UserContext);
    const [load, setLoad] = useState(false);

    function cancel() {
        setHabit({...habit});
        setNewHabit(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoad(true);
        const promise = postHabits(user.token, habit);
        promise.then(() => {
            setLoad(false);
            setNewHabit(false);
            setReload(!reload);
            setHabit({
                name: "",
                days: [],
            });
        });
        promise.catch((error) => {
            setLoad(false);
            alert(error.response.data.message);
        })
    }
    return(
        <Form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="nome do hábito" 
                disabled={load} 
                required
                value={habit.name}
                onChange={(e) => setHabit({ ...habit, name: e.target.value })}/>
            <Weekdays habit={habit} setHabit={setHabit} load={load} nonEditable={false}/>   
            <Buttons>
                <button disabled={load} onClick={cancel}>Cancelar</button>
                <button type="submit" disabled={load}>{load ? <ThreeDots color="#FFFFFF" width="43" height="10" /> : "Salvar"}</button>
            </Buttons>
        </Form>
    );
}

const Form = styled.form`
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 10px 0 10px 0;
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        padding-left: 11px;
        background-color: ${props => props.load ? "#F2F2F2" : "#FFFFFF"};
        color: #666666;
        font-size: 20px;
        ::placeholder {
            color: #DBDBDB;
            font-size: 20px;
        }
    }
    `;

const Buttons = styled.div`
    width: 303px;
    display: flex;
    justify-content: flex-end;
    button {
        width: 84px;
        height: 35px;
        border-radius: 5px;
        border: none;
        opacity: ${props => props.load ? "0.7" : "1"};
    }
    button:first-child {
        background-color: #FFFFFF;
        color: #52B6FF;
        font-size: 16px;
        margin-right: 10px;
    }
    button:last-child {
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 16px;
    }
    `;