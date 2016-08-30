import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [
      BrowserModule
  ],
  declarations: [
    AppComponent,
    DirectiveExampleComponent
  ],

  bootstrap : [AppComponent]

})
export class AppModule { }
