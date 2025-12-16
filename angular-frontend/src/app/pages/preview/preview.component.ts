import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  standalone: true,
})
export class PreviewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const qp = this.route.snapshot.queryParamMap;
    const slug = qp.get('slug') || qp.get('documentId') || qp.get('id') || undefined;
    const redirect = qp.get('redirect') || undefined;
    const locale = qp.get('locale') || 'en';
    const secret = qp.get('secret') || undefined;
    const previewFlag = qp.get('preview') ?? '1';
    const status = qp.get('status') ?? '';
    const uid = qp.get('uid') ?? '';
    const language = qp.get('language') ?? '';
    const url = qp.get('url') ?? '';

    const EXPECTED = environment.previewSecret;
    if (secret && EXPECTED && secret !== EXPECTED) {
      window.location.href = '/?preview=0';
      return;
    }

    try {
      document.cookie = `preview=${encodeURIComponent(previewFlag)}; path=/; max-age=${60 * 60}`; // 1h
      localStorage.setItem('preview', previewFlag);
    } catch (err) {
      console.warn('Não foi possível salvar cookie/localStorage de preview', err);
    }

    if (redirect) {
      window.location.href = redirect;
      return;
    }

    window.location.href = url;
  }
}
