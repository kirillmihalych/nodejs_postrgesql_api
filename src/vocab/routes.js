const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getVocab)
router.post('/', controller.addWord)
router.get('/:id', controller.getWordById)
router.put('/:id', controller.updateWord)
router.delete('/:id', controller.removeWord)

module.exports = router
