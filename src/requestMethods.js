import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTMyNGI3ZmM4ODc1Mjg1NzYyYjBkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjkxMTM5NCwiZXhwIjoxNzE3MTcwNTk0fQ.ZYBhA1jgYeXZDfA-kykg5IDbg2OWHap4NYqrnQc8avs";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});