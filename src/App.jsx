import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "./styles/ResetCSS";
import GlobalStyles from "./styles/GlobalStyles";
import UserContext from "./contexts/UserContext";
import ProgressContext from "./contexts/ProgressContext";
import Login from "./Components/LoginAndSignUp/Login";
import SignUp from "./Components/LoginAndSignUp/SignUp";
import Today from "./Components/MainPage/Today/Today";
import Habits from "./Components/MainPage/Habits/Habits";
import History from "./Components/MainPage/History";

export default function App() {
    const [user, setUser] = useState("");
    const [percentage, setPercentage] = useState(0);
    return(
        <UserContext.Provider value={{user, setUser}}>
            <ProgressContext.Provider value={{percentage, setPercentage}}>
                <BrowserRouter>
                    <ResetCSS />
                    <GlobalStyles />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<SignUp />} />
                        <Route path="/habitos" element={<Habits />} />
                        <Route path="/hoje" element={<Today />} />
                        <Route path="/historico" element={<History />} />
                    </Routes>
                </BrowserRouter>
            </ProgressContext.Provider>
        </UserContext.Provider>
    );
}