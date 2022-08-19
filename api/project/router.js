const express = require("express");
const router = express.Router();

const {
  get,
  insert
} = require("./model");

router.get('/', (req, res) => {
    return get().then((data)=>{
        return res.send(data)
    }).catch((error)=>{
        return res.send(error)
    })
})

router.post('/', (req, res) => {
    return insert(req.body).then((data)=>{
        return res.send(data)
    }).catch(()=>{
        return res.status(400).send({})
    })
})

module.exports = router