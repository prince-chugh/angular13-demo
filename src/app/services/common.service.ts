import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const url = 'http://localhost:3000';
@Injectable()
export class CommonService {
  public errorMessage = new BehaviorSubject<string>('');
  user!: any;
  constructor(private http: HttpClient) { }

  getInfo() {
    return true;
  }

  getUsers() {
    return this.http.get(url+'/userss');
  }

  createUser(payload: any) {
    return this.http.post(url+'/users', payload);
  }

  setUserData(data: any) {
    this.user = data;
  }

  getUserData() {
    return this.user;
  }

  getFormConfig() {
    return [
      {key: 'name', value:'', label: 'Name', required: true, controlType: 'textbox'},
      {key: 'username', value:'', label: 'Username', required: true, controlType: 'textbox'},
      {key: 'email', value:'', label: 'Email', required: true, controlType: 'textbox'},
      {key: 'contact', value:'', label: 'Contact', required: true, controlType: 'textbox'},
      {key: 'address', value:'', label: 'Address', required: true, controlType: 'textbox'},
      {key: 'role', value:'user', label: 'Role', required: false, controlType: 'dropdown',
        options: [{key: 'admin', label: 'Admin'}, {key: 'user', label: 'User'}]},
    ]
  }

  setErrorMessage(message: string) {
    this.errorMessage.next(message);
  }
}
