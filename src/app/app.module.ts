import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateUpdateComponent } from './component/create-update/create-update.component';
import { ListComponent } from './component/list/list.component';
import { UserService } from './shared/user.service';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes=[
  {path:'',component: ListComponent},
  {path:'createUpdate',component: CreateUpdateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
