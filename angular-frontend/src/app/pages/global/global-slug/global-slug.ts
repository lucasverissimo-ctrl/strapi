import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContentBlockRenderer } from '@components/content-block-renderer/content-block-renderer';

@Component({
  selector: 'app-global-slug',
  imports: [ContentBlockRenderer],
  templateUrl: './global-slug.html',
  styleUrl: './global-slug.scss',
})
export class GlobalSlug implements OnInit {
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
