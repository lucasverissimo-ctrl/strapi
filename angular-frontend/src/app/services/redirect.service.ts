import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RedirectService {
  // contém a URL de destino (ex: /br/path?x=1#hash) ou null
  private _candidate = new BehaviorSubject<string | null>(null);
  public candidate$ = this._candidate.asObservable();

  setCandidate(url: string) {
    this._candidate.next(url);
  }

  clear() {
    this._candidate.next(null);
  }
}
