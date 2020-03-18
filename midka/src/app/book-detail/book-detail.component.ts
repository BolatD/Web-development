import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Database } from '../database';
import { BooksService }  from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.css' ]
})
export class BookDetailComponent implements OnInit {
  hero: Database;
  database:any;

  constructor(
    private route: ActivatedRoute,
    private BooksService: BooksService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDatabase();
  }

  getDatabase(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BooksService.getDatabase(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}

