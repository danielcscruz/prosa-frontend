// services/PostService.ts
import axios from 'axios'

const API_BASE = 'https://prosa-app-31830595ff5b.herokuapp.com/api/posts/' // or your actual API URL

export const createPost = async (content: string, token: string) => {
  const response = await axios.post(
    API_BASE,
    { content },
    {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
    },
  )
  return response.data
}
