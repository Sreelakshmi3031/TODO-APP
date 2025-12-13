import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App as AppComponent } from './app';
import {Todo as TodoComponent} from './todo/todo';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, NgModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}

