import { ArticleService } from './article.service';
import { Article } from './../models/article.model';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    this.articleService.sortArticles();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    this.articleService.sortArticles();
    return false;
  }
}
