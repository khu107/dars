const { Router } = require("express");
const router = Router();
const Post = require("../models/post");

// home
router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.find({});
    res.status(200).json({ allPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
    });
    await newPost.save();
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
router.put("/", (req, res) => res.send("hello /book put"));
router.delete("/", (req, res) => res.send("hello /book delete"));

module.exports = router;
