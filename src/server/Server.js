import Axios from "axios";

export default Axios.create({
    baseURL: 'https://api-filmapik.herokuapp.com'
})