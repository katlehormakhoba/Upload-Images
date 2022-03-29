const multer = require("multer");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/img/users");
    },
    filename: function (req, file, cb) {
      console.log(file);
      // originalname: 'coolest-anime-characters-36-61b1e0e2e5921__700.jpg',
      const ext = file.originalname.split(".").slice(-1)[0];
  
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix + "." + ext);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.includes("image")) {
      cb(null, true);
    } else {
      cb(new Error("File must be an image"), false);
    }
  };
  
  const upload = multer({ storage: storage, fileFilter: fileFilter });



  exports.uploadImage = upload.single('photo');

  
exports.updateUser =  (req, res, next) => {
    res.status(200).json({
      status: "success",
    });
}