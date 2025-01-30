import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage });
// const upload = multer({ dest: 'uploads/' });

export default upload;