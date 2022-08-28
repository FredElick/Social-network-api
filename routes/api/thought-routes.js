const router = require('express').Router();
const {
    addThought,
    getAllThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction

} = require('../../controllers/thoughtController');

router
.route('/')
.get(getAllThought)
.post(addThought);

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
.route('/:thoughtId/reaction/:reactionId')
.delete(removeReaction);

router
    .route('/:thoughtId/reactions')
    .post(addReaction);









module.exports = router;