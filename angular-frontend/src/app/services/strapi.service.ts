import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  constructor() {}

  private getBaseUrl(): string {
    return environment.apiUrl || 'http://localhost:1337';
  }

  private buildHeaders(): Record<string, string> {
    const headers: Record<string, string> = { Accept: 'application/json' };
    if (environment.strapiApiToken) {
      headers['Authorization'] = `Bearer ${environment.strapiApiToken}`;
    }
    return headers;
  }

  async strapiGet(
    path: string,
    params?: Record<string, string | number | boolean>
  ): Promise<Response> {
    const base = this.getBaseUrl();
    const url = new URL(`${base}${path}`);

    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        url.searchParams.set(k, String(v));
      });
    }

    const headers = this.buildHeaders();

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers,
    });

    return res;
  }

  async fetchStrapi(
    locale = 'en',
    isDraft = false,
    site: string,
    slug?: string
  ): Promise<any | null> {
    const params: Record<string, string> = { locale };

    if (isDraft) params['status'] = 'draft';
    if (slug && slug !== '/') {
      params['filters[slug][$eq]'] = slug;
    } else {
      params['filters[slug][$eq]'] = 'homepage';
    }

    params['populate[components][on][components.hero][populate][background_image]'] = 'true';
    params['populate[components][on][components.content-block][populate][image]'] = 'true';
    params['populate[components][on][components.hero-slugs]'] = 'true';
    params['populate[components][on][components.contact-form][populate][inputs]'] = 'true';
    params['populate[components][on][components.carousel][populate][slides][populate][0]'] =
      'image';

    const res = await this.strapiGet(`/api/${site}`, params);

    if (res.status === 401 || res.status === 403) {
      const text = await res.text().catch(() => '');
      throw new Error(`Strapi permission error: ${res.status} ${text}`);
    }

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`Strapi error fetching /api/${site}: ${res.status} ${text}`);
    }

    const json = (await res.json()) as any;

    return json?.data && json.data.length > 0 ? json.data[0] : null;
  }

  async fetchModal(locale: string):Promise<any | null> {
    const params: Record<string, string> = { locale };
    const res = await this.strapiGet(`/api/modal-de-redirecionamentos`, params);

    if (res.status === 401 || res.status === 403) {
      const text = await res.text().catch(() => '');
      throw new Error(`Strapi permission error: ${res.status} ${text}`);
    }

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`Strapi error fetching: ${res.status} ${text}`);
    }

    const json = (await res.json()) as any;

    return json?.data && json.data.length > 0 ? json.data[0] : null;
  }
}

