import { Component, OnInit } from '@angular/core';
import { Database } from '../database';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Database[];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.getHeroes();
    
  }

  getHeroes(): void {
    this.booksService.getHeroes()
    .subscribe(heroes => this.books = heroes);
  }
}