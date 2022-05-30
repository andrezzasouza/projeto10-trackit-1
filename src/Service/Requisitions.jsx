import axios from "axios";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit",
    SIGNUP_URL = URL + "/auth/sign-up",
    LOGIN_URL = URL + "/auth/login",
    HABITS_URL = URL + "/habits/";

export function register(newUser) {
    const promise = axios.post(SIGNUP_URL, newUser);
    return promise;
}

export function login(userLogin) {
    const promise = axios.post(LOGIN_URL, userLogin);
    return promise;
}

export function getHabits(token) {
    const promise = axios.get(HABITS_URL, { headers: { Authorization: `Bearer ${token}`}});
    return promise;
}

export function postHabits(token, habit) {
    const promise = axios.post(HABITS_URL, habit, { headers: { Authorization: `Bearer ${token}`}});
    return promise;
}

export function deleteHabits(token, id) {
    const promise = axios.delete(HABITS_URL + id, { headers: { Authorization: `Bearer ${token}`}});
    return promise;
}

export function getTodayHabits(token) {
    const promise = axios.get(HABITS_URL + "today", { headers: { Authorization: `Bearer ${token}`}});
    return promise;
}

export function checkHabit(token, id) {
    const promise = axios.post(HABITS_URL + id + "/check", {}, { headers: { Authorization: `Bearer ${token}`}});
    return promise;
}

export function uncheckHabit(token, id) {
    const promise = axios.post(HABITS_URL + id + "/uncheck", {}, { headers: { Authorization: `Bearer ${token}`}});
    return promise;
}