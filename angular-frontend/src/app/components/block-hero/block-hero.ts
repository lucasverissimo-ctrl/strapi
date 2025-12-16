import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-hero',
  imports: [],
  templateUrl: './block-hero.html',
  styleUrl: './block-hero.scss',
})
export class BlockHero {
  @Input() data: any;
}
