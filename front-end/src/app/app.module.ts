import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { CardComponent } from './card/card.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupComponent } from './signup/signup.component';
import { FormValidatorComponent } from './form-validator/form-validator.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    SummaryPipe,
    TitleCasePipe,
    CardComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupComponent,
    FormValidatorComponent,
    ChangePasswordComponent,
    PostsComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // expose ngModel in template
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
   CoursesService // Singleton
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
