const { RESTDataSource } = require("apollo-datasource-rest");

const { NEWSAPI_URL, NEWSAPI_KEY } = require("../../../config");

class NewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = NEWSAPI_URL;
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

  async getTopHeadlines(requestBody) {
    const { language, category, query, pageSize, page } = JSON.parse(
      JSON.stringify(requestBody.input)
    );

    const reqBody = {
      language: language ? language.toLowerCase() : "en",
      category: category ? category.toLowerCase() : "technology",
      q: query ? query : "",
      pageSize: pageSize ? pageSize : 10,
      page: page ? page : 1,
    };

    const response = await this.get(`top-headlines`, reqBody);

    const articles = response.articles;

    return Array.isArray(articles)
      ? articles.map((news, index) => this.headlines(news, index))
      : [];
  }

  async searchNews(requestBody) {
    const { query, language, pageSize, page} = JSON.parse(
      JSON.stringify(requestBody.input)
    );

    const reqBody = {
      language: language ? language.toLowerCase() : "en",
      q: query ? query : "",
      pageSize: pageSize ? pageSize : 10,
      page: page ? page : 1,
    };
    const response = await this.get(`everything`, reqBody);

    const articles = response.articles;

    return Array.isArray(articles)
      ? articles.map((news, index) => this.headlines(news, index))
      : [];
  }
}

module.exports = NewsAPI;
