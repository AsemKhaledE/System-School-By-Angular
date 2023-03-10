import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { TrainerComponent } from './trainer/trainer.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { GetCoursesByIdComponent } from './get-courses-by-id/get-courses-by-id.component';
import { GetStudentByIdComponent } from './get-students-by-id/get-student-by-id.component';
const routes: Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'student', component: StudentComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'studentCourse', component: StudentCourseComponent },
  { path: 'GetCourseById', component: GetCoursesByIdComponent },
  { path: 'GetStudentById', component: GetStudentByIdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
