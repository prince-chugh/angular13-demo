import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  @Input()
  control!: any;
  message: string = '';
  errorSubscription = new Subscription();
  unsubscribe$ = new Subject();

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.errorSubscription = this.commonService.errorMessage.
    pipe(takeUntil(this.unsubscribe$)).subscribe((msg: string) => {
      console.log('in error-message subscription');
      this.message = msg
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
    if (this.errorSubscription) {
      // this.errorSubscription.unsubscribe();
      console.log(this.errorSubscription);
      // console.log('Error message Subscription is unsubscribed: ');
      // this.errorSubscription.unsubscribe();
    }
  }

  getErrorMessage() {
    if (this.control && this.control.errors && (this.control.dirty || this.control.touched)) {
      if (this.control.errors['required']) {
        return 'Requied Field';
      }
      if (this.control.errors['minlength']) {
        return `Minimum length required is ${this.control.errors['minlength'].requiredLength}`;
      }
      if (this.control.errors['beginOrEndSpace']) {
        return 'Please remove trailing spaces';
      }
    }
    return '';
  }

}
