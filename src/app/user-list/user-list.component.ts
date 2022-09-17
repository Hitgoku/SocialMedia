import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { 
  }

  usersList : User[];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[])=> {
     this.usersList = data;
  });
    
  }

}
