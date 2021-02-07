import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Splitting Component';
  serverElements: any[] = [{ type: 'server', name: 'Test', content: 'test' }];

  constructor() {}

  onServerAdded(eventData: {
    serverName: string;
    serverContent: string;
  }): void {
    this.serverElements.push({
      type: 'server',
      name: eventData.serverName,
      content: eventData.serverContent,
    });
  }

  onBlueprintAdded(eventData: {
    serverName: string;
    serverContent: string;
  }): void {
    this.serverElements.push({
      type: 'blueprint',
      name: eventData.serverName,
      content: eventData.serverContent,
    });
  }

  onChangeFirst(): void {
    this.serverElements[0].name = 'Changed';
  }

  onDestroyFirst(): void {
    this.serverElements.splice(0, 1);
  }
}
