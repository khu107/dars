import { Response, Router, Request } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "succsess" });
});
export default router;
