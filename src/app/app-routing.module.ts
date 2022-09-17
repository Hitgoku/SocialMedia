import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserPostComponent } from './user-post/user-post.component';

const routes: Routes = [{
  path:"",component:UserListComponent
},
{path:"users/:id/posts",component:UserPostComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
