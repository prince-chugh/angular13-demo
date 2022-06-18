import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomAttrDirective } from './directives/custom-attr.directive';
import { CustomStructDirective } from './directives/custom-struct.directive';
import { CommonService } from './services/common.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CommonComponentsModule } from './common-components/common-components.module';
import { AuthGuard } from './common-components/AuthGuard';
import { UsersModule } from './features/users/users.module';
import { AppHttpInterceptor } from './common-components/app-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CustomAttrDirective,
    CustomStructDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonComponentsModule,
    UsersModule
  ],
  exports: [CustomAttrDirective],
  providers: [
    CommonService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }