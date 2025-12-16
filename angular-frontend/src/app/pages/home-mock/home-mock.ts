import { Component } from '@angular/core';
import { HeroExpandingVideo } from '@app/components/hero-expanding-video/hero-expanding-video';
import { BlockTextAndButton } from '@app/components/block-text-and-button/block-text-and-button';
import { BlockNews } from '@app/components/block-news/block-news';
import { BlockDocuments } from '@app/components/block-documents/block-documents';

@Component({
  selector: 'app-home-mock',
  imports: [HeroExpandingVideo, BlockTextAndButton, BlockNews, BlockDocuments],
  templateUrl: './home-mock.html',
  styleUrl: './home-mock.scss',
})
export class HomeMock {
  whoWeAre = {
    title: "Who We Are",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis ullamcorper nulla, sit amet ultrices arcu venenatis eu. Aenean lobortis ornare aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas justo sem, aliquam nec enim laoreet, hendrerit tempus est. Morbi nec lorem ut ligula pulvinar ultricies ut eu massa.",
    buttonLabel: "Learn more",
    buttonLink: "#"
  }

  privateEquity = {
    title: "Private Equity",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis ullamcorper nulla, sit amet ultrices arcu venenatis eu.",
    buttonLabel: "Learn more",
    buttonLink: "#"
  }
}
