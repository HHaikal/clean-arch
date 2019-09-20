const makeList = require('./list')
const {
	list
} = require('@use_case/article')

module.exports = {
	list: makeList(list)
}