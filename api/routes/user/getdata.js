const express = require ('express');
const app =express();
const router = express.Router();
const user = require ('../../controller/usermodules');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
router.post('/', function(req, res, next) {
    user.getdata(req.body, res);
});
module.exports = router