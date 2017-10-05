import { Article } from '../models/article.model';
import { ArticleService } from './../article/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-submitter',
  templateUrl: './link-submitter.component.html',
  styleUrls: ['./link-submitter.component.scss']
})
export class LinkSubmitterComponent implements OnInit {

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articleService.addArticle(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }
}
