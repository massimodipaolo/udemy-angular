import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component'; 
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    SummaryPipe,
    TitleCasePipe,
    CardComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule, //expose ngModel in template
  ],
  providers: [
   CoursesService //Singleton
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
