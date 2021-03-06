const {Song} = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to the fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      const songs = await Song.findById(req.params.songId)
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to the fetch the song'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      console.log(song)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create a song'
      })
    }    
  }
}
