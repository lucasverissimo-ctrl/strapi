import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContentBlockRenderer } from '@components/content-block-renderer/content-block-renderer';

@Component({
  selector: 'app-slug-br',
  imports: [ContentBlockRenderer],
  templateUrl: './slug-br.html',
  styleUrl: './slug-br.scss',
})
export class SlugBr implements OnInit {
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
