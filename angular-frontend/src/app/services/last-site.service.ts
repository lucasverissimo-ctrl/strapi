import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

export interface LastVisited {
  url: string;
  timestamp: number;
  site: string;
  title?: string;
}

const STORAGE_KEY = 'app:lastVisited';

@Injectable({ providedIn: 'root' })
export class LastSiteService {
  private isBrowser: boolean;

  constructor(private router: Router, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  start() {
    if (!this.isBrowser) return;
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((ev: NavigationEnd) => {
        const url = ev.urlAfterRedirects ?? ev.url;
        let site = "";
        if (url.startsWith('/br')) {
          site = '/br';
        } else if (url.startsWith('/co')) {
          site = '/co';
        } else {
          site = '/';
        }
        try {
          const payload: LastVisited = { url, site, timestamp: Date.now() };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        } catch (err) {
          console.warn('Não foi possível salvar lastVisited', err);
        }
      });
  }

  get(): LastVisited | null {
    if (!this.isBrowser) return null;
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (!s) return null;
      return JSON.parse(s) as LastVisited;
    } catch {
      return null;
    }
  }

  clear() {
    if (!this.isBrowser) return;
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }

  set(visited: LastVisited) {
    if (!this.isBrowser) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
    } catch {
      console.warn('Não foi possível salvar lastVisited');
    }
  }
}