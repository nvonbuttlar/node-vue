const axios = require('axios');

export async function getAllUsers() {
    const response = await axios.get('/api/users');
    return response.data;
}

export async function creatWorker(data) {
    const response = await axios.post(`/api/worker`, {user: data});
    return response.data;
}