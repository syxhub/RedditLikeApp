import { Component, OnInit } from '@angular/core';

import { ArticleService } from './article/article.service';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  articles: Array<Article>;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articles = this.getArticles();
  }

  getArticles() {
    return this.articleService.getArticles();
  }
}
