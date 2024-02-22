import { Request, Response, Router } from "express";
import multer, { StorageEngine, diskStorage } from "multer";
import path from "path";
import imageModel, { IImage } from "../schema/image.schema";
import { v2 } from "cloudinary";
import fs from "fs/promises";
import * as dotenv from "dotenv";
dotenv.config();

const storage: StorageEngine = diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, "uploads/");
  },
  filename: (req: Request, file: Express.Multer.File, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExt = path.extname(file.originalname);
    const filename = `file-${uniqueSuffix}${fileExt}`;
    cb(null, filename);
  },
});
// setup multer
const upload = multer({ storage });

const config = v2.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.apiKey,
  api_secret: process.env.apiSecret,
});

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  return res.status(200).json({
    message: "success",
    data: await imageModel.find<IImage[]>(),
  });
});

router.post("/", upload.single("file"), async (req: Request, res: Response) => {
  const uploadFile = await v2.uploader.upload(
    String(req.file?.path),
    (err, resp) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "error",
        });
      }
      const createdData = imageModel.create<IImage>({
        title: String(req.file?.originalname),
        image_source: String(resp?.secure_url),
        description: String(req.file?.originalname),
      });
    }
  );

  fs.unlink(String(req.file?.path))
    .then(() => console.log("image uchirildi"))
    .catch((err) => console.error(err));
  return res.status(200).json({
    message: "success",
    file: uploadFile,
  });
});

export default router;
