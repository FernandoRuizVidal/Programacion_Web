const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=>res.json({text: 'onisama'}));
/* Exportador */
module.exports = router;