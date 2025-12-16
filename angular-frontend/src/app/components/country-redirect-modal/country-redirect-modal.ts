import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { RedirectService } from '../../services/redirect.service';
import { StrapiService } from '@app/services/strapi.service';
import { LastSiteService } from '@app/services/last-site.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-country-redirect-modal',
  imports: [CommonModule],
  templateUrl: './country-redirect-modal.html',
  styleUrl: './country-redirect-modal.scss',
})
export class CountryRedirectModal implements OnInit, OnDestroy {
  public visible = false;
  public currentSite = '';
  public locale = '';
  public data: any;
  public lastSite = '';
  private sub: Subscription | null = null;
  private target: string | null = null;

  constructor(
    private redirect: RedirectService,
    private router: Router,
    private strapi: StrapiService,
    private getLastSite: LastSiteService
  ) {
    this.sub = this.redirect.candidate$.subscribe((url) => {
      this.target = url;
      this.lastSite = this.getLastSite.get()?.site || '';
    });
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentSite = event.urlAfterRedirects;

        console.log('target:', this.target);
        console.log('lastSite:', this.lastSite);
        console.log('checkCurrentSiteMatchesLastSite:', this.checkCurrentSiteMatchesLastSite());
        if (!!this.target) {
          this.visible = true;
        } else if (this.checkCurrentSiteMatchesLastSite()) {
          this.visible = false;
        } else {
          // this.getLastSite.clear();
          this.redirect.setCandidate(this.lastSite);
          this.visible = true;
        }

        if (this.target?.startsWith('/br')) {
          this.locale = 'pt-BR';
        } else if (this.target?.startsWith('/co')) {
          this.locale = 'es';
        } else {
          this.locale = 'en';
        }

        this.strapi
          .fetchModal(this.locale)
          .then((data) => {
            this.data = data;
          })
          .catch((err) => {
            console.error('Erro fetchStrapi:', err);
          });
      });
  }

  checkCurrentSiteMatchesLastSite(): boolean {
    console.log('Comparando sites:', this.currentSite, this.lastSite);
    if (!this.lastSite || this.currentSite.split('/')[1] === this.lastSite.split('/')[1]) {
      return true;
    }
    return false;
  }

  stay() {
    this.visible = false;
    this.redirect.clear();
  }

  go() {
    this.getLastSite.clear();
    if (!this.target) return;
    this.router.navigateByUrl(this.target, { replaceUrl: true }).catch((err) => {
      console.error('Erro ao navegar:', err);
    });
    this.redirect.clear();
    this.visible = false;
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
