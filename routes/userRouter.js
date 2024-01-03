const router = require('express').Router
const { addUser } = require('../middleware/usersMiddleware/addUser')
const { deleteUser } = require('../middleware/usersMiddleware/deleteUser')
const { getUser } = require('../middleware/usersMiddleware/getUser')
const { updateUser } = require('../middleware/usersMiddleware/updateUser')

router.put('/newUser', addUser);
router.get('/getUser', getUser);
router.post('/updateUser', updateUser);
router.delete('/deleteUSer', deleteUser);

modeule.exports = router