import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common-components/AuthGuard';
import { ErrorMessageComponent } from './common-components/error-message/error-message.component';
import { AddUserComponent } from './features/users/add-user/add-user.component';
import { UsersComponent } from './features/users/users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'error', component: ErrorMessageComponent},
  {
    path: 'user', component: UsersComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    resolve: [AuthGuard],
    children: [
      { path: 'add', component: AddUserComponent, canDeactivate: [AuthGuard] },
      { path: 'edit', component: AddUserComponent }
    ]
  },
  /* {path: 'user', canDeactivate: [AuthGuard],
  loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)}, */
  {
    path: 'department',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import('./features/department/department.module').then(m => m.DepartmentModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
