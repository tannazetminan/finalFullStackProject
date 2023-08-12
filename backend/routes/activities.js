const router = require('express').Router();
let Activity = require('../models/booklist.model');

router.route('/').get((req, res) => {
  Activity.find()
    .then((activities) => res.json(activities))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
  const { title, author, description } = req.body;
  const newActivity = new Activity({
    title,
    author,
    description,
  });

  // Save the new object (newActivity)
  try {
    await newActivity.save();
    res.json('Activity added!');
    console.log("ok")
  } catch (err) {
    res.status(400).json('Error: ' + err);
    console.log("no")

  }
});


router.route('/:id').get((req, res) => {
  console.log('just id' + req.params.id);
  Activity.findById(req.params.id)
    .then((activity) => res.json(activity))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete(async (req, res) => {
  console.log('delete logged');
await Activity.findByIdAndDelete(req.params.id)
    .then(() => res.json('Activity deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post(async (req, res) => {
  try {
    const activityToUpdate = await Activity.findById(req.params.id);
    if (!activityToUpdate) {
      return res.status(404).json('Activity not found');
    }

    activityToUpdate.description = req.body.description; // Update the description field

    await activityToUpdate.save();
    res.json('Activity updated!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});


module.exports = router;
