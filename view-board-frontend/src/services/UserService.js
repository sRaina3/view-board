import axios from 'axios'
const baseURLStream = 'https://streaming-availability.p.rapidapi.com/v2/'
const baseURLMD = 'https://moviesdatabase.p.rapidapi.com/'
const apiKey = process.env.REACT_APP_API_KEY

const getTitleInfo = (searchEntity) => {
  const options = {
    method: 'GET',
    url: `${baseURLStream}search/title`,
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
    url: `${baseURLStream}services`,
    headers: {
      'X-RapidAPI-Key': apiKey,
    }
  }
  const request = axios.request(options)
  return request.then(response => response.data)
}

const getUpcoming = () => {
  const options = {
    method: 'GET',
    url: `${baseURLMD}titles/x/upcoming`,
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  }
  const request = axios.request(options)
  return request.then(response => response.data)
}

const userService = {getTitleInfo, getServices, getUpcoming}

export default userService