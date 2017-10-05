import { ArticleService } from './article/article.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { LinkSubmitterComponent } from './link-submitter/link-submitter.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkSubmitterComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
