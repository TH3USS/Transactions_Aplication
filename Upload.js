//Upload da planilha
const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  dest: 'uploads/',
  filename: (_, file, cb) => {
    cb(null, Date.now().toString() + "_" + path.extname(file.originalname));
  },
  fileFilter: (req, file, cb) => {
    const fileExtension = ['application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet'].find(correctFormat => correctFormat == file.mimetype);

    if(fileExtension){
        return cb(null, true);
    }

    return cb(null, false);
}
});

const upload = multer({ storage });

router.post('/upload', upload.single('file')/*, uploadPlanilha*/, (req, res) =>{
    console.log(request.file)
});

module.exports = router;