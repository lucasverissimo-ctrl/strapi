import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-block-hero-slugs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './block-hero-slugs.html',
  styleUrls: ['./block-hero-slugs.scss'],
})
export class BlockHeroSlugs {
  @Input() data: any;
}
