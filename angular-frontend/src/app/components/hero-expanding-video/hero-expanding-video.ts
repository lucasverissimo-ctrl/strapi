// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-hero-expanding-video',
//   imports: [],
//   templateUrl: './hero-expanding-video.html',
//   styleUrl: './hero-expanding-video.scss',
// })
// export class HeroExpandingVideo {
//   videoUrl = 'assets/videos/patria_lancamento.mp4';
//   thumbnail = 'assets/videos/patria_lancamento.png';

//   showControls = false;

//   onPlay(video: HTMLVideoElement) {
//     video.play();
//     this.showControls = true;
//   }
// }

import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero-expanding-video',
  imports: [],
  templateUrl: './hero-expanding-video.html',
  styleUrl: './hero-expanding-video.scss',
})
export class HeroExpandingVideo implements AfterViewInit {
  @ViewChild('videoWrap', { static: true }) videoWrap!: ElementRef<HTMLElement>;
  @ViewChild('video', { static: true }) videoEl!: ElementRef<HTMLVideoElement>;

  videoUrl = 'assets/videos/patria_lancamento.mp4';
  thumbnail = 'assets/images/patria_lancamento.png';

  showControls = false;
  private readonly fixedTop = 86 + 132;
  private readonly startW = 640;
  private max = 800;
  private readonly endW = document.documentElement.clientWidth;
  private removed = false;

  ngAfterViewInit() {
    this.videoEl.nativeElement.style.width = this.startW + 'px';
    const el = this.videoWrap.nativeElement;
    el.style.position = 'fixed';
    el.style.top = this.fixedTop + 'px';
    el.style.left = '50%';
    el.style.transform = 'translateX(-50%)';
  }

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY;
    const f = Math.min(y / this.max, 1);
    const w = Math.round(this.startW + (this.endW - this.startW) * f);
    this.videoEl.nativeElement.style.width = `${w}px`;

    const el = this.videoWrap.nativeElement;

    if (f === 1) {
      if (!this.removed) {
        const container = el.parentElement!;
        const containerRect = container.getBoundingClientRect();
        const topAbs = this.fixedTop + y - containerRect.top;
        el.style.position = 'static';
        el.style.transform = 'translate(0, 0)';
        el.style.width = '100%';
        this.videoEl.nativeElement.style.width = '100%';
        this.removed = true;
      }
    } else {
      if (this.removed) {
        el.style.position = 'fixed';
        el.style.top = this.fixedTop + 'px';
        el.style.left = '50%';
        el.style.transform = 'translateX(-50%)';
        el.style.width = 'auto';
        this.videoEl.nativeElement.style.width = '100%';
        this.removed = false;
      }
    }
  }

  onPlay(video: HTMLVideoElement) {
    video.play();
    this.showControls = true;
    window.scrollTo({
      top: this.max,
      behavior: 'smooth'
    });
  }
}
