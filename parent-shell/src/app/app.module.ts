import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { LazyElementsModule } from '@angular-extensions/elements';
import { ChildALoaderComponent } from './child-a-loader/child-a-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildALoaderComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    LazyElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
