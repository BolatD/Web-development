import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
const routes: Routes = [
  { path: '', redirectTo: '/books-list', pathMatch: 'full' },
  { path: 'books-list', component: BooksListComponent },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: 'books-list', component: BooksListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormsModule,
    BooksListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
