import { Component } from '@angular/core';
import { ContentBlockRenderer } from '@components/content-block-renderer/content-block-renderer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ContentBlockRenderer],
})
export class HomeComponent {}
