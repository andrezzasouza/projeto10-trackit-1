import styled from "styled-components";

export default function Weekdays({habit, setHabit, load, nonEditable}) {
    const days = ['D','S','T','Q','Q','S','S'];

    function addDay(index) {
        if(habit.days.includes(index) === false) {
            setHabit({ ...habit, days: [...habit.days, index]});
        } else {
            setHabit({ ...habit, days: habit.days.filter(item => item !== index)});
        }
    }
   
    return (
        <Week>
            {days.map((day, index) => <Weekday onClick={() => addDay(index)} key={index} index={index} habit={habit} disable={load && nonEditable}>{day}</Weekday>)}
        </Week>
    );
}

function selectedDayBackgroundColor(index, habit) {
    if (habit.days.includes(index)) {
        return "#CFCFCF";
    } else {
        return "#FFFFFF";
    }
}

function selectedDayTextColor(index, habit) {
    if (habit.days.includes(index)) {
        return "#FFFFFF";
    } else {
        return "#DBDBDB";
    }
}

const Weekday = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    margin-right: 4px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => selectedDayBackgroundColor(props.index, props.habit)};
    color: ${props => selectedDayTextColor(props.index, props.habit)};
    font-size: 20px;
    font-family: "Lexend Deca", sans-serif;
    `;

const Week = styled.div`
    width: 303px;
    display: flex;
    `;