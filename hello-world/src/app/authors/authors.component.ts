import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors;
  constructor(service: AuthorsService){
    this.authors = service.getAuthors();
  }

  getAuthorsCount(){
    return this.authors.length;
  }
  


}
