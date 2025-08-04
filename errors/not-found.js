const {StatusCodes} = require('http-status-codes')
const CustomAPIError = require('./custom-api')

class NOtFoundError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

module.exports = NOtFoundError