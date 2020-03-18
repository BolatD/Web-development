import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Database } from './database';
import { books } from './ardatabases';
//import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class BooksService {
  getDatabase(id: number) {
    return of(books.find(book => book.id === id));
  }

  //constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Database[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched heroes');
    return of(books);
  }

   getHero(id: number): Observable<Database> {
      //TODO: send the message _after_ fetching the hero
     //this.messageService.add(`HeroService: fetched hero id=${id}`);
     return of(books.find(book => book.id === id));
   }
}