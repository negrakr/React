import axios from 'axios'

export default axios.create({
  baseURL: 'https://quiz-react-cfbf6-default-rtdb.europe-west1.firebasedatabase.app/'
})