const router = require('express').Router()
const Recipe = require('./rescipes-model')


router.get('/:recipes_id', (req, res, next) => {
  Recipe.getRecipeById(req.params.id)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(next)
})

router.use((err, req, res, next) => { //eslint disable line
  res.status(500).json({
    customMessage: 'something went wrong inside the recipes router',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router