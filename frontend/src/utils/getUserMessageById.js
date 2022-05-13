const userMessages = require('../data/userMessages.json')
const getUserMessageById = id => userMessages.find(message => message.Code)
export default getUserMessageById
