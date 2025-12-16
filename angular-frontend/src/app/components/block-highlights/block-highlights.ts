import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-highlights',
  imports: [],
  templateUrl: './block-highlights.html',
  styleUrl: './block-highlights.scss',
})
export class BlockHighlights {
  @Input() data: any;

  public array = Array(4);
}
