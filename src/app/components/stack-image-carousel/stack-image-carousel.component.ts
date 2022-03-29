import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack-image-carousel',
  templateUrl: './stack-image-carousel.component.html',
  styleUrls: ['./stack-image-carousel.component.scss']
})
export class StackImageCarouselComponent implements OnInit {
  imgArray = [
    {
      src: '/assets/imgs/Saly-1.png',
      allowControlsAndExtras: true,
      alt: 'Saly Flying',
      caption: 'You’ll be walking on air',
      subText: 'Find out exactly who your customers are, what they love and most importantly, what they think about you.',
      active: false
    },
    {
      src: '/assets/imgs/Saly-2.png',
      allowControlsAndExtras: true,
      alt: 'Saly Flying',
      caption: 'Get back some me time',
      subText: 'With our always on, pre built research packs you can start hearing directly from your customers within a matter of minutes.',
      active: false
    },
    {
      src: '/assets/imgs/Saly-3.png',
      allowControlsAndExtras: true,
      alt: 'Saly Flying',
      caption: 'Accelerate your growth',
      subText: 'Leverage Stack’s weekly insight summary and powerful dahsboard to make confident decisions about your business.',
      active: false
    },
    {
      src: '/assets/imgs/Saly-4.png',
      allowControlsAndExtras: true,
      alt: 'Saly Flying',
      caption: 'Take your next big leap',
      subText: 'Leverage Stack’s weekly insight summary and powerful dahsboard to make confident decisions about your business.',
      active: false
    },
    {
      src: '/assets/imgs/Saly-5.png',
      allowControlsAndExtras: false,
      alt: 'Saly Flying'
    }
  ];
  selectedImg: any;
  fadeTransition: boolean = false;
  firstImgLoad = true;
  paginationControls = {
    activePage: 0,
    numberOfPages: () => {
      let counter = 0;
      this.imgArray.forEach(imgObj => {
        imgObj.allowControlsAndExtras && counter++;
      });
      return counter;
    },
    goToPage: (pageNum: number) => {
      this.paginationControls.activePage = pageNum;
      if (!this.firstImgLoad) {
        this.fadeTransition = true;
        setTimeout(() => {
          this.fadeTransition = false;
          this.selectedImg = this.imgArray[this.paginationControls.activePage];
        }, 400);
      } else {
        this.selectedImg = this.imgArray[this.paginationControls.activePage];
        this.firstImgLoad = false;
      }
      this.imgArray.forEach((img, index) => {
        if (index === pageNum) {
          this.imgArray[pageNum].active = true;
        } else {
          this.imgArray[index].active = false;
        }
      })
    },
    next: () => {
      let incrementedPage = this.paginationControls.activePage + 1;
      const totalNumOfPages = this.paginationControls.numberOfPages();
      if (incrementedPage >= totalNumOfPages) {
        incrementedPage = totalNumOfPages - incrementedPage;
      }
      this.paginationControls.goToPage(incrementedPage);
    },
    previous: () => {
      let decrementedPage = this.paginationControls.activePage - 1;
      const totalNumOfPages = this.paginationControls.numberOfPages();
      if (decrementedPage < 0) {
        decrementedPage = totalNumOfPages - 1;
      }
      this.paginationControls.goToPage(decrementedPage);
    },
    done: () => {
      this.paginationControls.goToPage(this.imgArray.length - 1);
    }
  };

  @Input() set goToPage(pageNum: number) {
    this.paginationControls.goToPage(pageNum);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
