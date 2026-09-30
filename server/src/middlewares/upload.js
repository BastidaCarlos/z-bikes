import multer from "multer"
import path from "path"

const storage = multer.memoryStorage();

export const uploadImage = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype && file.mimetype.startsWith('image/')) {
           cb(null, true) 
        } else {
            cb(new Error('Solo se permiten imágenes'), false)
        }
    }
})

const csvStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()* 1E9);
        const ext = path.extname(file.originalname);

        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

export const uploadCsv = multer({
    storage: csvStorage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();

        if(file.mimetype === 'text/csv' || ext === '.csv') {
            cb(null, true);
        } else {
            cb(new Error('Solo se permiten archivos en formato csv (.csv)'), false)
        }
    }
})
