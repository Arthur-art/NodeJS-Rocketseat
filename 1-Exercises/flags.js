const flag = index => {
    const indexFlag = process.argv.indexOf(index)+1;
    return process.argv[indexFlag]
}
module.exports = flag;