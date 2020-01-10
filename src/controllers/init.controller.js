const db = require('../db')

function initController(req, res) {
    validateRequestBody(req, res)
    storeInitData(req, res)
    return res.status(200).json({"status": "initialised correctly"})
}

function validateRequestBody(req, res) {
    const isPresent = req.body.strjson
    const isString = (typeof req.body.strjson === "string")
    const isJsonString = isValidJson(req.body.strjson)
    const isArrayJsonString = isValidArrayJsonString(req.body.strjson)

    if(!isPresent) return res.status(422).json({"status": "missing strjson body post parameter"})
    if(!isString) return res.status(400).json({ "status": "strjson is not a string" })
    if(!isJsonString) return res.status(400).json({"status": "strjson is not a valid JSON string"})
    if(!isArrayJsonString) return res.status(400).json({"status": "strjson is not a valid JSON array"})
}

function storeInitData(req, res){
    const initData = { "strjson": JSON.parse(req.body.strjson) }
    const success = db.set('strjson', initData).write()
    if(!success) res.status(400).json({"status": "strjson couldnot be stored in the cache"})
}

function isValidJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function isValidArrayJsonString(str) {
    let parsedJSON 
    try {
        parsedJSON = JSON.parse(str);
    } catch (e) {
        return false;
    }
    return (Array.isArray(parsedJSON)) ? true : false
}


module.exports = initController