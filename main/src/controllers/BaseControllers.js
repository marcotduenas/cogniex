const axios = require('axios');

/* String - Path */
/* Object|Array - Payload */

class Controller {
    constructor() {

    }

    async create(path, payload) {
        return axios.post(path, payload)
    }

    async read(path) {
            const res = await axios.get(path)
            .catch(err => {
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