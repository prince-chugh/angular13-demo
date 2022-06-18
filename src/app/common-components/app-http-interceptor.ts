import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { CommonService } from "../services/common.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private router: Router, private commonService: CommonService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url } = request;
        console.log('http call intercepted for url: ' + url);
        return next.handle(request).pipe(
            map(event => {
                if (event instanceof HttpResponse && event.body) {
                    event.body.forEach((item: any) => {
                        item.name = item.name.toUpperCase();
                    });
                }
                return event;
            }),
            catchError(err => {
                let message = '';
                if (err instanceof HttpErrorResponse) {
                    message = (err.error && err.error.message) ? err.error.message : err.statusText;
                    this.commonService.setErrorMessage('Error in Request: ' + err.error.message);
                    this.router.navigate(['error']);
                }
                return throwError(() => new Error(message));
            })
        );
    }
}