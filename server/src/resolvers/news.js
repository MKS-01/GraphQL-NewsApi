module.exports = {
  Query: {
    topHeadlines: async (_, arg, { dataSources }) => {
      return dataSources.newsAPI.getTopHeadlines(arg);
    },
  },
};
