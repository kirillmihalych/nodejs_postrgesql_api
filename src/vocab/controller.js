const pool = require('../../db')
const queries = require('./queries')

const getVocab = (req, res) => {
  pool.query(queries.getVocabQuery, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getWordById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getWordByIdQuery, [id], (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const addWord = (req, res) => {
  const { word, translation } = req.body
  // check if word already exists
  pool.query(queries.checkWordExists, [word], (err, results) => {
    if (results.rows.length) {
      res.send('Word is already exists.')
    }

    // add word to db
    pool.query(queries.addWordQuery, [word, translation], (err, results) => {
      if (err) throw err
      res.status(201).send('Word added successfully')
    })
  })
}

const removeWord = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query(queries.getWordByIdQuery, [id], (error, results) => {
    const noWordFound = !results.rows.length
    if (noWordFound) {
      res.send('Word does not exist in the database, could not remove.')
    }

    pool.query(queries.removeWordQuery, [id], (err, results) => {
      if (err) throw err
      res.status(200).send('Word removed')
    })
  })
}

const updateWord = (req, res) => {
  const id = parseInt(req.params.id)
  const { word } = req.body

  pool.query(queries.getWordByIdQuery, [id], (err, results) => {
    const noWordFound = !results.rows.length
    if (noWordFound) {
      res.send('Word does not exist in the database.')
    }

    pool.query(queries.updateWordQuery, [word, id], (error, results) => {
      if (error) throw error
      res.status(200).send('Word updated')
    })
  })
}

module.exports = {
  getVocab,
  getWordById,
  addWord,
  removeWord,
  updateWord,
}
