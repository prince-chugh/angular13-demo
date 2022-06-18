import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {

  }
  title = 'angular-demo';
  flag: boolean = false;
  inputTitle: string = '';
  activeIndex!: number;

  ngOnInit() {
    localStorage.setItem('role', 'Admin');
    localStorage.setItem('username', 'abc');
  }

  onClickMenu(index: number) {
    this.activeIndex = index;
    if (index === 0) {
      this.router.navigate(['user']);
    } else if (index === 1) {
      this.router.navigate(['user/add']);
    } else if (index === 2) {
      this.router.navigate(['department']);
    } else if (index === 3) {
      this.router.navigate(['department/add']);
    } else if (index === 4) {
      this.router.navigate(['home']);
    }
  }
}
