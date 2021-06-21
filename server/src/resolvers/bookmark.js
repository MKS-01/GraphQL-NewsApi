const { Bookmark } = require("../dataSources/models");

module.exports = {
  Query: {
    getBookmarks: async () => {
      try {
        return await Bookmark.find({}).populate().exec();
      } catch (e) {
        throw new Error(e.message);
      }
    },
  },

  Mutation: {
    addBookmark: async (_, { input }) => {
      const {
        author,
        title,
        description,
        url,
        urlToImage,
        publishedAt,
        content,
      } = JSON.parse(JSON.stringify(input));

      const bookmark = new Bookmark({
        author: author,
        title: title,
        description: description,
        url: url,
        urlToImage: urlToImage,
        publishedAt: publishedAt,
        content: content,
      });

      try {
        const result = await new Promise((resolve, reject) => {
          bookmark.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });

        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    removeBookmark: async (_, { id }) => {
      try {
        const res = await Bookmark.findByIdAndRemove(id).exec();

        if (!res) {
          console.log("already removed!");
          return false;
        }
        return true;
      } catch (e) {
        throw new Error(e.message);
      }
    },
  },
};
