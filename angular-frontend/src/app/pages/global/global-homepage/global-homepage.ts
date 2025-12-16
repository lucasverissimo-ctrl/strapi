import { Component } from '@angular/core';
import { ContentBlockRenderer } from '@components/content-block-renderer/content-block-renderer';

@Component({
  selector: 'app-global-homepage',
  imports: [ContentBlockRenderer],
  templateUrl: './global-homepage.html',
  styleUrl: './global-homepage.scss',
})
export class GlobalHomepage {

}
