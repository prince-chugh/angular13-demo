import { Injectable } from "@angular/core";
import {
    RouterStateSnapshot, ActivatedRouteSnapshot, Route, UrlSegment,
    CanActivate, CanActivateChild, CanLoad, CanDeactivate, Resolve
} from "@angular/router";
import { Observable } from "rxjs";
import { AddUserComponent } from "../features/users/add-user/add-user.component";
import { UsersComponent } from "../features/users/users.component";
import { CommonService } from "../services/common.service";

@Injectable()
export class AuthGuard implements CanActivate,
    CanActivateChild, CanDeactivate<AddUserComponent>, CanLoad, Resolve<UsersComponent> {
    constructor(private commonService: CommonService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        const user = localStorage.getItem('username');
        if (user) {
            return true;
        }
        return false;
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        const role = localStorage.getItem('role');
        return (role === 'Admin');
    }
    canLoad(route: Route, segments: UrlSegment[]) {
        const role = localStorage.getItem('role');
        return (role === 'Admin');
    }
    canDeactivate(component: AddUserComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> { 
        return this.commonService.getUsers();
    }


}