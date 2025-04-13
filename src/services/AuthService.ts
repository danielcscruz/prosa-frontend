import axios from 'axios'

const API_URL = 'http://localhost:8000/api/token/'

export default {
  async login(username: string, password: string) {
    const response = await axios.post(`${API_URL}`, { username, password })
    return response.data
  },

  async refresh(refreshToken: string) {
    const response = await axios.post(`${API_URL}refresh/`, { refresh: refreshToken })
    return response.data
  },
}

export async function getCurrentUser(token: string) {
  return await axios.get(`${API_URL}/users/me/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
}
