import axios from 'axios'
import config from './config'

export const getApi = async (url: string) => {
  try {
    let apiUrl = `${config.serverURL}${url}`
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    return response
  } catch (error) {
    return error
  }
}