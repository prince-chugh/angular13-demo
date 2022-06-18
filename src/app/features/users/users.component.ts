import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  userSubscription!: Subscription;
  constructor(private commonService: CommonService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.users = response[0];
    })
/*     this.users = this.activatedRoute.snapshot.data[0] */
      /* this.userSubscription = this.commonService.getUsers().pipe(delay(3000)).subscribe({
        next: (response: any) => {
          this.users = response;
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('Observable of fetch user is completed');
        }
      }); */
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  onEdit(user: any) {
    this.commonService.setUserData(user);
    this.router.navigate([`/user/edit/${user._id}`]);
  }

}
