import { Component } from '@angular/core';
import { ContentBlockRenderer } from '@components/content-block-renderer/content-block-renderer';

@Component({
  selector: 'app-homepage-br',
  imports: [ContentBlockRenderer],
  templateUrl: './homepage-br.html',
  styleUrl: './homepage-br.scss',
})
export class HomepageBr {}
