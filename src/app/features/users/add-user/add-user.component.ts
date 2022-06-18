import { Component, Input, OnInit } from '@angular/core';
import { noBeginOrEndSpaces } from 'src/app/util/custom-validators';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormHelperService } from 'src/app/util/FormHelperService';
import { Router, ActivatedRoute } from '@angular/router';
import { FormModel } from 'src/app/util/FormModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form!: FormGroup;
  user!: any;
  id!: string;
  formControls!: FormModel<string>[];
  isNew: boolean = false;
  constructor(private commonService: CommonService, private route: ActivatedRoute, private router: Router,
    private formHelperService: FormHelperService) { }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.id = id;
    this.isNew = (this.router.url === '/user/add');
    this.user = this.commonService.getUserData();
    this.formControls = this.formHelperService.getFormControls();
    this.form = this.formHelperService.toFormGroup(this.formControls);
    if (!this.isNew && this.user) {
/*       delete this.user._id;
      delete this.user.createdAt;
      delete this.user.updatedAt;
      this.form.setValue(this.user); */
      this.form.patchValue(this.user);
      /* this.form.get('name')?.setValue(this.user.name);
      this.form.get('username')?.setValue(this.user.username);
      this.form.get('email')?.setValue(this.user.email);
      this.form.get('contact')?.setValue(this.user.contact);
      this.form.get('address')?.setValue(this.user.address);
      this.form.get('role')?.setValue(this.user.role); */
    }
    // this.form.setValue(JSON.parse(JSON.stringify(this.user)));
    /* this.form = new FormGroup({
      name: new FormControl(this.isNew ? '' : this.user.name, Validators.required),
      username: new FormControl(this.isNew ? '' : this.user.username, [Validators.required]),
      email: new FormControl(this.isNew ? '' : this.user.email, [Validators.required, Validators.email]),
      contact: new FormControl(this.isNew ? '' : this.user.contact, [Validators.required, Validators.minLength(10)]),
      address: new FormControl(this.isNew ? '' : this.user.address, Validators.required),
      role: new FormControl('admin')
    }); */

    /* this.form?.setValue({});
    this.form?.patchValue({name: 'abc'});
    this.form.get('username')?.value;
    this.form.value
    this.form.getRawValue() */
    /* if (addUser) {
      this.form.get('username')?.addValidators([Validators.required, noBeginOrEndSpaces]);
    } */
    // this.form.get('username')?.clearValidators();
  }

  onSubmit() {
    if (this.form.valid) {
      this.commonService.createUser(this.form.value).subscribe({
        next: (response) => {
          alert('User created successfully');
          this.router.navigate(['user']);
        },
        error: (err: HttpErrorResponse) => {
          alert(err.error.message);
        },
        complete: () => {
          console.log('Observable of Create user is completed');
        }
      })
    } 
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.form.valid && this.form.dirty) {
      alert("Changes are not saved, you can not leave");
      return false
    }
    return true;
  }

}
