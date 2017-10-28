import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductComponent }  from './product.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProductComponent ],
  bootstrap:    [ AppComponent, ProductComponent ]
})
export class AppModule { }
