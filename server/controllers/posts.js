import User from '../models/User.js';
import Post from '../models/Post.js';

// @desc    Create Post 
// @route   POST /posts/
// @access  Private
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: [],
        });
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

// @desc    Get Feed Posts 
// @route   GET /posts/
// @access  Private
export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find().sort({ 'updatedAt': -1 });
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// @desc    Get User Posts 
// @route   GET /posts/:userId
// @access  Private
export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId }).sort({ 'updatedAt': -1 });
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// @desc    Update post when liked post
// @route   PUSH /posts/:id/like
// @access  Private
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        );
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};