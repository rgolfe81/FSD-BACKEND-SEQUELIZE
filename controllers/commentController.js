const { Comment } = require("../models");
const commentController = {};


commentController.createComment = async (req, res) => {
    try {
        const message = req.body.message;
        const productId = req.body.product_id;
        const newComment = await Comment.create({
            product_id: productId,
            message: message
        })
        return res.json(newComment);
    } catch (error) {
        return res.send(error.message);
    }
}

commentController.getCommentById = async (req, res) => {
    const commentId = req.params.id;
    const comment = await Comment.findByPk(commentId, {
        include: {all: true}
    });
    return res.json(comment);
}

commentController.deleteCommentById = async(req, res) => {
    const commentId = req.params.id; 
    const deleteComment = await Comment.destroy({where: { id: commentId}})
    return res.json(deleteComment);
}

commentController.putCommentById = async (req, res) => {
    const commentId = req.params.id;
    const name = req.body.name;
    const updateComment = await Comment.update({name: name}, {where: {id: commentId}});
    return res.json(updateComment);
}


module.exports = commentController;