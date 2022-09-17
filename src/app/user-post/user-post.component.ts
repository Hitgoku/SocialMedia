import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/Post';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  userPosts : Post[];
  constructor(private userService : UserService, private activatedRoute : ActivatedRoute ) { }
  

  ngOnInit(): void {
    let userId : any = this.activatedRoute.snapshot.paramMap.get('id');
    //alert(userId);
    this.userService.getPosts(userId).subscribe((data: Post[])=> {
      this.userPosts = data;
   });
  }

}
