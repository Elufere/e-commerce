import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
let TOKEN = null;

try {
    const root = JSON.parse(localStorage.getItem("persist:root"));
    const user = root ? JSON.parse(root.user) : null;
    TOKEN = user ? user.currentUser.accessToken : null;
} catch (error) {}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});
