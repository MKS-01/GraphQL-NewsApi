function buildQuery() {
  return {
    topHeadlines: async (_, __, { dataSources }) => {
      return dataSources.newsAPI.getTopHeadlines();
    },
  };
}

exports.buildQuery = buildQuery;
