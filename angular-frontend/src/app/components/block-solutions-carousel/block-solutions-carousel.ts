import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-block-solutions-carousel',
  imports: [],
  templateUrl: './block-solutions-carousel.html',
  styleUrl: './block-solutions-carousel.scss',
})
export class BlockSolutionsCarousel {
  @ViewChild('scroller', { static: true }) scroller!: ElementRef<HTMLDivElement>;

  slides = [
    "assets/images/carousel/01.png",
    "assets/images/carousel/02.png",
    "assets/images/carousel/03.png",
    "assets/images/carousel/04.png",
    "assets/images/carousel/05.png",
    "assets/images/carousel/06.png",
    "assets/images/carousel/07.png",
    "assets/images/carousel/08.png",
    "assets/images/carousel/01.png",
    "assets/images/carousel/02.png"
  ]
  selectedIndex = 1;
  private page = 520;

  onPrev() {
    this.scroller.nativeElement.scrollBy({ left: -this.page, behavior: 'smooth' });
    if (this.selectedIndex > 1) this.selectedIndex--;
    console.log('botão left clicado');
  }

  onNext() {
    this.scroller.nativeElement.scrollBy({ left: this.page, behavior: 'smooth' });
    if (this.selectedIndex < this.slides.length - 2) this.selectedIndex++;
    console.log('botão right clicado');
  }
}
