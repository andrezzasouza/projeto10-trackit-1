import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../../contexts/UserContext";
import { getHabits } from "../../../Service/Requisitions";
import Habit from "./Habit";
import Footer from "../../shared/Footer";
import Header from "../../shared/Header";
import Body from "../../shared/Body";




export default function Habits() {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState(false);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const promise = getHabits(user.token);
        promise.then(response => {
            setHabits(response.data);
        });
        promise.catch(error => {console.log(error)});
    }, [user]);

    return(
        <>
            <Header />
            <Body>
                <MyHabits>
                    <h2>Meus Hábitos</h2>
                    <button onClick={() => setNewHabit(true)}>+</button>
                </MyHabits>
                <HabitsList>
                    {newHabit === false ? "" : <NewHabit />}
                    {habits.length !== 0 ? 
                        habits.map((habit, index) => {<Habit habit={habit} key={index} />})
                        : 
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
                </HabitsList>
            </Body>
            <Footer />
        </>
    );
}

const MyHabits = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    h2 {
        font-size: 23px;
        color: #126BA5;
    }
    button {
        background-color: #52B6FF;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 27px;
        color: #FFFFFF;
    }
    `;

const HabitsList = styled.div`
    width: 100%;
    p {
        color: #666666;
        font-size: 18px;
    }
    `;