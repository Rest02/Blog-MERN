import multer from 'multer'


const storage = multer.storage({
    destination: (req, file, cb) => {
        cd(null , "public/image")
    },
    filename : (req, file, cb) =>{
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})


export const upload = multer ({
    storage: storage
})