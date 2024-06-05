var express = require('express');
var router = express.Router();
var blogC = require('../controller/blog')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
/* GET home page. */
router.post('/create',upload.single('profileImage'), blogC.blogcreate)
router.get('/', blogC.blogfind)
router.put('/:id', blogC.blogupdate)
router.delete('/:id', blogC.blogdelete)

module.exports = router;
