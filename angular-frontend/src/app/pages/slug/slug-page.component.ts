import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContentBlockRenderer } from '@components/content-block-renderer/content-block-renderer';

@Component({
  selector: 'app-slug-page',
  templateUrl: './slug-page.component.html',
  styleUrls: ['./slug-page.component.scss'],
  standalone: true,
  imports: [ContentBlockRenderer],
})
export class SlugPageComponent implements OnInit {
  loading = true;
  errorMessage: string | null = null;
  slug: string | null = null;

  constructor(private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.slug = params.get('slug');

      if (!this.slug) {
        this.loading = false;
        this.errorMessage = 'Slug não informado (404)';
        return;
      }
    });
  }
}
