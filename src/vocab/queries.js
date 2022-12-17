const getVocabQuery = 'SELECT * FROM vocab'
const getWordByIdQuery = 'SELECT * FROM vocab WHERE id = $1'
const checkWordExists = 'SELECT v FROM vocab v WHERE v.word = $1'
const addWordQuery = 'INSERT INTO vocab (word, translation) VALUES ($1, $2)'
const removeWordQuery = 'DELETE FROM vocab WHERE id = $1'
const updateWordQuery = 'UPDATE vocab SET word = $1 WHERE id = $2'

module.exports = {
  getVocabQuery,
  getWordByIdQuery,
  checkWordExists,
  addWordQuery,
  removeWordQuery,
  updateWordQuery,
}
