import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'app works!';

  public test(): void {
    require('google-client-api')().then((gapi) => {
      gapi.client.load('costlogger', 'v1', () => {}, '//' + window.location.host + '/_ah/api');
      gapi.client.costlogger.cost.list().execute((resp) => console.log(resp));
    });
  }
}
