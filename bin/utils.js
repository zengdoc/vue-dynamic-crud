const fs = require('fs')
const handlebars = require('handlebars')
const chalk = require('chalk')
const symbols = require('log-symbols')

const logSuccess = arguments => {
    console.log(symbols.success, chalk.green(arguments))
}

const logError = arguments => {
    console.log(symbols.error, chalk.red(arguments))
}

const compile = (data, templateFilePath) => {
    let result = ''
    const source = fs.readFileSync(templateFilePath).toString()
    const template = handlebars.compile(source);
    result = template(data)
    return result
}

const stringInsert = (str, insertStr, index) => {
    return index > 0
        ? str.substring(0, index) + insertStr + str.substring(index, str.length)
        : str;
}

const firstUpperCase = path => {
    return typeof path === 'string'
        ? path.substring(0, 1).toUpperCase() + path.substring(1, path.length)
        : path;
}

module.exports = {
    logError,
    logSuccess,
    compile,
    stringInsert,
    firstUpperCase,
}
