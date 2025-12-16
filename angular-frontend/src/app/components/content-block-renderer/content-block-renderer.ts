import { Component, Input, OnInit } from '@angular/core';
import { StrapiService } from '@app/services/strapi.service';
import { BlockHero } from '../block-hero/block-hero';
import { BlockHighlights } from '../block-highlights/block-highlights';
import { BlockHeroSlugs } from '../block-hero-slugs/block-hero-slugs';
import { BlockContactForm } from '../block-contact-form/block-contact-form';

@Component({
  selector: 'app-content-block-renderer',
  templateUrl: './content-block-renderer.html',
  styleUrls: ['./content-block-renderer.scss'],
  standalone: true,
  imports: [BlockHero, BlockHighlights, BlockHeroSlugs, BlockContactForm],
})
export class ContentBlockRenderer implements OnInit {
  @Input() locale!: string;
  @Input() site!: string;
  @Input() slug?: string;

  public blocks: any;

  constructor(private strapi: StrapiService) {}

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');
    const preview = params.get('preview');
    const isDraft = status === 'draft' || preview === 'true';

    this.strapi
      .fetchStrapi(this.locale, isDraft, this.site, this.slug)
      .then((data) => {
        this.blocks = data;
        console.log('Conteúdo carregado:', data);
      })
      .catch((err) => {
        console.error('Erro fetchStrapi:', err);
      });
  }
}
