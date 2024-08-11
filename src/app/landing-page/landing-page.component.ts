import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  private blob!: HTMLElement;
  private navLinks!: NodeListOf<HTMLAnchorElement>;

  ngOnInit(): void {
    this.blob = this.elRef.nativeElement.querySelector('.blob');
    this.navLinks = this.elRef.nativeElement.querySelectorAll('.floating-nav a');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const { clientX: x, clientY: y } = event;
    if (this.blob) {
      this.renderer.setStyle(this.blob, 'left', `${x - (this.blob.offsetWidth / 2)}px`);
      this.renderer.setStyle(this.blob, 'top', `${y - (this.blob.offsetHeight / 2)}px`);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPos = window.scrollY;

    this.navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href') || '') as HTMLElement;
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop - 50 && scrollPos < sectionTop + sectionHeight) {
          this.renderer.addClass(link, 'active');
        } else {
          this.renderer.removeClass(link, 'active');
        }
      }
    });
  }
}