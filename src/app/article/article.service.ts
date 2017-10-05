import { Injectable } from '@angular/core';

import { Article } from './../models/article.model';

@Injectable()
export class ArticleService {
    articles: Array<Article>;

    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 10),
            new Article('Angular 2.5', 'http://angular.io', -3),
            new Article('Angular 4', 'http://angular.io', 56)
        ];
    }

    addArticle(newArticle: Article) {
        this.articles.push(newArticle);
    }

    getArticles() {
        return this.articles;
    }

    sortArticles(): Array<Article> {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}
