import User from '../models/User.js';
import Post from '../models/Post.js';

// @desc    Create Post 
// @route   POST /posts/
// @access  Private
export const createPost = async (req, res) => {
    try {
        ;
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// @desc    Get Feed Posts 
// @route   GET /posts/
// @access  Private
export const getFeedPosts = async (req, res) => {
    try {

    } catch (error) {

    } res.status(404).json({ message: error.message });
}

// @desc    Get User Posts 
// @route   GET /posts/:userId
// @access  Private
export const getUserPosts = async (req, res) => {
    try {

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// @desc    Update post when liked post
// @route   PUSH /posts/:id/like
// @access  Private
export const likePost = async (req, res) => {
    try {

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}