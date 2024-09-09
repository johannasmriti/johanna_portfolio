import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExpertiseComponent } from '../expertise/expertise.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [AboutSectionComponent, ExperienceComponent, EducationComponent, ProjectsComponent, ExpertiseComponent, ContactComponent,FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  private blob!: HTMLElement;
  private navLinks!: NodeListOf<HTMLAnchorElement>;
  private sections!: NodeListOf<HTMLElement>;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.blob = this.elRef.nativeElement.querySelector('.blob');
    this.navLinks = this.elRef.nativeElement.querySelectorAll('.floating-nav a');
    this.sections = this.elRef.nativeElement.querySelectorAll('section');

    this.setActiveLink();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const { pageX: x, pageY: y } = event;
    if (this.blob) {
      this.renderer.setStyle(this.blob, 'left', `${x - (this.blob.offsetWidth / 2)}px`);
      this.renderer.setStyle(this.blob, 'top', `${y - (this.blob.offsetHeight / 2)}px`);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.setActiveLink();
  }

  private setActiveLink(): void {
    if (typeof window === 'undefined') return; 

    const scrollPos = window.scrollY + window.innerHeight / 2; 

    this.navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href') || '') as HTMLElement;
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          this.renderer.addClass(link, 'active');
        } else {
          this.renderer.removeClass(link, 'active');
        }
      }
    });
  }
}