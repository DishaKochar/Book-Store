import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from "./auth/auth.module";


@NgModule({
    declarations: [AppComponent, BooksComponent, BookComponent, CartComponent],
    imports: [BrowserModule, AuthModule, AppRoutingModule,ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule{}