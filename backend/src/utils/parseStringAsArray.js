module.exports = parseStringAsArray = (arrayAsString) => {
    return arrayAsString.split(',').map(tech => tech.trim());
}