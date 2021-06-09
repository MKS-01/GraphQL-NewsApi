const { RESTDataSource } = require("apollo-datasource-rest");

const { NEWSAPI_KEY } = require("../../../config");

class NewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://newsapi.org/v2/";
  }

  willSendRequest(request) {
    request.params.set("apiKey", NEWSAPI_KEY);
  }

  headlines(news, index) {
    return {
      id: index + 1,
      title: news.title,
      author: news.author,
      content: news.content,
      description: news.description,
      publishedAt: news.publishedAt,
      url: news.url,
      urlToImage: news.urlToImage,
    };
  }

  async getTopHeadlines() {
    const response = await this.get(`top-headlines\?sources\=techcrunch`);

    const articles = response.articles;

    return Array.isArray(articles)
      ? articles.map((news, index) => this.headlines(news, index))
      : [];
  }
}

module.exports = NewsAPI;
