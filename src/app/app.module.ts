import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FileSaverModule } from 'ngx-filesaver';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
var ram : Routes=[

  {
    path:'',
    component:OneComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    OneComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, FileSaverModule,
    RouterModule.forRoot(ram)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
