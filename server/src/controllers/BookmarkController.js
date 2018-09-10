const { Bookmark } = require('../models');
const { Song } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const { songId, userId } = req.query;
      const where = {
        UserId: userId,
      };
      if (songId) {
        where.SongId = songId;
      }
      const bookmark = await Bookmark.findAll({
        where,
        include: [
          {
            model: Song
          },
        ],
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({
          bookmarkId: bookmark.id,
        }), bookmark.Song);
      res.send(bookmark);
    } catch (err) {
      res.status(500).send({
        error: 'Error has occured trying to fetch Bookmark',
      });
    }
  },

  async post(req, res) {
    try {
      const { songId, userId } = req.body;
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId,
        },
      });
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark',
        });
      }
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId,
      });
      res.send(newBookmark);
    } catch (err) {
      res.status(500).send({
        error: 'Error has occured trying to create Bookmark',
      });
    }
  },

  async delete(req, res) {
    try {
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findById(bookmarkId);
      await bookmark.destroy();
      res.send(bookmark);
    } catch (err) {
      res.status(500).send({
        error: 'Error has occured trying to delete Bookmark',
      });
    }
  },
};
