import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }


  //we are subscribing to an Observable that emits a data source -
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        },
      );
  }

  onActivate() {
    this.usersService.userActivated.next(this.id); //so here i am changing the activated data
  }

}
