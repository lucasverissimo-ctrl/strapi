import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-text-and-button',
  imports: [],
  templateUrl: './block-text-and-button.html',
  styleUrl: './block-text-and-button.scss',
})
export class BlockTextAndButton {
  @Input() data: any;
}
