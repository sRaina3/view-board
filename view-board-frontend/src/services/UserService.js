import axios from 'axios'
const baseURL = 'https://streaming-availability.p.rapidapi.com/v2/'
const apiKey = '8ae7ce15a1mshcb425916ddfc8fap1b0a7djsnb36bc59d6a3e'

const getTitleInfo = (searchEntity) => {
  const options = {
    method: 'GET',
    url: `${baseURL}search/title`,
    params: {
      title: searchEntity,
      country: 'us',
      output_language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
    }
  }
  const request = axios.request(options)
  return request.then(response => response.data)
}

const getServices = () => {
  const options = {
    method: 'GET',
    url: `${baseURL}services`,
    headers: {
      'X-RapidAPI-Key': apiKey,
    }
  }
  const request = axios.request(options)
  return request.then(response => response.data)
}

const userService = {getTitleInfo, getServices}

export default userService