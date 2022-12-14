import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { SampleComponent } from './sample/sample.component';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { PipeComponent } from './pipe/pipe.component'
import { AppendPipe } from './pipe/custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BindingComponent,
    DirectivesComponent,
    SampleComponent,
    LogoutComponent,
    DecoratorsComponent,
    PipeComponent   ,
    AppendPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
