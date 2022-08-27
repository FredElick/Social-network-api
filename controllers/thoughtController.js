const { User, Thought} = require('../models');

const thoughtController = {
    addThought({ params, body }, res) {
        Thought.create(body)
        .then(({ _id})=>{
            return User.findOneAndUpdate(
                {_id: params.userId },
                { $push: { thoughts: _id}},
                { new: true}
            );
        })
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: 'No User found witht his id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
    getAllThought(rew, res){
     Thought.find({})
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
    },
    getThoughtById({ params}, res){
        User.findOne({ _id: params.id})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        })
    },
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
          .then(dbThoughtData => {
            if (!dbThoughtData) {
              res.status(404).json({ message: 'No pizza found with this id!' });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => res.json(err));
      },
      deleteThought({ params}, res){
        Thought.findOneAndDelete({ _id: params.id})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.json(err));
      },
      addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $push: { reactions: body } },
          { new: true, runValidators: true }
        )
          .then(Data => {
            if (!Data) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(Data);
          })
          .catch(err => res.json(err));
      },
      removeReaction({ params }, res) {
        Comment.findOneAndUpdate(
          { _id: params.thoughtId },
          { $pull: { reaction: { reactionId: params.reactionId } } },
          { new: true }
        )
          .then(dbPizzaData => res.json(dbPizzaData))
          .catch(err => res.json(err));
      }
};

module.exports = thoughtController;