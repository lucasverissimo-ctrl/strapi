import { Component, OnInit, inject  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryRedirectModal } from './components/country-redirect-modal/country-redirect-modal';
import { Header } from './components/header/header';
import { Cookies } from './components/cookies/cookies';
import { LastSiteService } from './services/last-site.service';
import { ContentBlockRenderer } from '@components/content-block-renderer/content-block-renderer';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CountryRedirectModal, Header, Cookies, ContentBlockRenderer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  locale: string = "en"
  site: string | null = null
  slug: string = "/";
  loading = true;
  errorMessage: string | null = null;

  pathAtual: string = "";
  private router = inject(Router);

  constructor(private lastSite: LastSiteService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.lastSite.start();

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        const locales = ['en', 'pt-br', 'es'];
        this.pathAtual = event.urlAfterRedirects;
        if (this.pathAtual.startsWith("/api/preview")) {
          const qp = this.route.snapshot.queryParamMap;
          const url = qp.get('url') ?? '';
          window.location.href = url;
        }
        const pathParts = this.pathAtual.split('/');

        if (this.pathAtual.startsWith("/br/") || this.pathAtual === "/br") {
          this.site = "patria-brs"
          if (locales.includes(pathParts[2]?.toLocaleLowerCase())) {
            this.locale = pathParts[2].toLocaleLowerCase();
            this.slug = pathParts.slice(3).join('/');
          } else {
            this.locale = 'pt-br';
            this.slug = pathParts.slice(2).join('/');
          }
        } else if (this.pathAtual.startsWith("/co/") || this.pathAtual === "/co") {
          this.site = "patria-cos"
          if (locales.includes(pathParts[2]?.toLocaleLowerCase())) {
            this.locale = pathParts[2].toLocaleLowerCase();
            this.slug = pathParts.slice(3).join('/');
          } else {
            this.locale = 'es';
            this.slug = pathParts.slice(2).join('/');
          }
        } else {
          this.site = "patrias"
          if (locales.includes(pathParts[1].toLocaleLowerCase())) {
            this.locale = pathParts[1].toLocaleLowerCase();
            this.slug = pathParts.slice(2).join('/');
          } else {
            this.locale = 'en';
            this.slug = pathParts.slice(1).join('/');
          }
        }
      });
  }
}
