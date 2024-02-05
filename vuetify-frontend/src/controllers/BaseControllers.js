const axios = require('axios');

class Controller {
    constructor() {

    }
    /**
   * Sends a new set of data to be stored on the database via axios POST method
   * @param {String} path - API endpoint
   * @param {Array|Object} payload - array|object of whats inside the chosen file
   */
    async create(path, payload) {
        return axios.post(path, payload)
    }
    /**
   * Request and store data from a api via axios GET method
   * @param {String} path - API endpoint
   * @returns {Array|Object} an array|object of elements representing the data stored within the database.
   */
    async read(path) {
            const res = await axios.get(path, {
                headers: {
                    Authorization: ("JWT " + localStorage.getItem("token")),
                }
            }).catch(err => {
                throw new Error('New error message', { cause: err })
            })
            return await res.data
    }
    update() {
    }

    async delete(payload) {
            console.log(payload)
            await axios.delete(payload)
                .then(res => {
                    console.log(res)
                    return res
                })
                .catch(error => {
                    throw new Error('New error message', { cause: error })
                })

    }
}



export default Controller