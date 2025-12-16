import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { RedirectService } from './redirect.service';

const COUNTRY_STORAGE_KEY = 'country_code';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient, private redirect: RedirectService) {}

  async initCall(): Promise<any> {
    try {
      // const IP = ''; // BRASIL
      // const IP = "/201.221.172.244"; // COLOMBIA
      // const IP = "/181.30.0.25";     // ARGENTINA
      // const res: any = await firstValueFrom(this.http.get(`https://ipapi.co${IP}/json/`));
      const res: any = {
        ip: '157.167.132.180',
        network: '157.167.132.0/24',
        version: 'IPv4',
        city: 'São Paulo',
        region: 'São Paulo',
        region_code: 'SP',
        country: 'BR',
        country_name: 'Brazil',
        country_code: 'AA',
        country_code_iso3: 'BRA',
        country_capital: 'Brasilia',
        country_tld: '.br',
        continent_code: 'SA',
        in_eu: false,
        postal: '01000',
        latitude: -23.5475,
        longitude: -46.6361,
        timezone: 'America/Sao_Paulo',
        utc_offset: '-0300',
        country_calling_code: '+55',
        currency: 'BRL',
        currency_name: 'Real',
        languages: 'pt-BR,es,en,fr',
        country_area: 8511965,
        country_population: 209469333,
        asn: 'AS44444',
        org: 'Forcepoint UK Limited',
      };
      this.saveCountryCodeFromResponse(res);

      const country = (res?.country_code || res?.country)?.toString().trim().toLowerCase();

      if (typeof window !== 'undefined') {
        const pathname = (window.location.pathname || '').toLowerCase();
        const countriesWithLocalOperations = ['br', 'co'];
        const startsWithCountry = countriesWithLocalOperations.some((country) =>
          pathname.startsWith(`/${country}`)
        );
        if (countriesWithLocalOperations.includes(country)) {
          if (!pathname.startsWith(`/${country}`)) {
            this.redirect.setCandidate(`/${country}`);
          }
        } else if (startsWithCountry) {
          this.redirect.setCandidate('/');
        }
      }
      return res;
    } catch (err) {
      console.error('initCall error', err);
      throw err;
    }
  }

  initCallFireAndForget(): void {
    this.http.get('https://ipapi.co/json/').subscribe({
      next: (res: any) => {
        this.saveCountryCodeFromResponse(res);
      },
      error: (err) => console.error('initCall error', err),
    });
  }

  private saveCountryCodeFromResponse(res: any): void {
    if (!res) return;
    const code = (res.country_code || res.country)?.toString().trim().toLowerCase();
    if (code) {
      try {
        localStorage.setItem(COUNTRY_STORAGE_KEY, code);
      } catch (e) {
        console.warn('Não foi possível salvar country_code no localStorage', e);
      }
    }
  }

  getSavedCountryCode(): string | null {
    try {
      return localStorage.getItem(COUNTRY_STORAGE_KEY);
    } catch {
      return null;
    }
  }
}
