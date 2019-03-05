import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date = new Date();

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Suspendisse eget varius justo. Aliquam id nunc diam. Morbi sollicitudin, ',
      loveIts: 1,
      created_at: this.date
    },
    {
      title: 'Mon deuxieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Suspendisse eget varius justo. Aliquam id nunc diam. Morbi sollicitudin, ',
      loveIts: 0,
      created_at: this.date
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Suspendisse eget varius justo. Aliquam id nunc diam. Morbi sollicitudin, ',
      loveIts: 2,
      created_at: this.date
    }
  ];
}
