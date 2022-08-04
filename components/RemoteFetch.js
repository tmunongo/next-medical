import axios from 'axios'

async function remoteFetch() {
  const url = 'https://randomuser.me/api/?results=6'
  const { data } = await axios.get(url)
  console.log('RF: ', data.type)
  return Promise.resolve()
}

export default remoteFetch
