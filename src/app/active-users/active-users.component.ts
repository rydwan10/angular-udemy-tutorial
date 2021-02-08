import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private usersService: UserService) {}

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  setToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
