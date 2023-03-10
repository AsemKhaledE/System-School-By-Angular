import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import CreateCourseComponent from './create-course/create-course.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CourseComponent } from './course/course.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { CraeteTrainerComponent } from './craete-trainer/craete-trainer.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { StudentCourseListComponent } from './student-course-list/student-course-list.component';
import { GetCoursesByIdComponent } from './get-courses-by-id/get-courses-by-id.component';
import { GetStudentByIdComponent } from './get-students-by-id/get-student-by-id.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CreateCourseComponent,
    NavBarComponent,
    CourseComponent,
    StudentListComponent,
    StudentComponent,
    StudentCreateComponent,
    TrainerComponent,
    TrainerListComponent,
    CraeteTrainerComponent,
    StudentCourseComponent,
    StudentCourseListComponent,
    GetCoursesByIdComponent,
    GetStudentByIdComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
