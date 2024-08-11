import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  blob!: HTMLElement|null;

  ngOnInit(): void {
    this.blob = document.querySelector('.blob');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const { clientX: x, clientY: y } = event;
    if(this.blob!=null){
      this.blob.style.left = `${x - (this.blob.offsetWidth / 2)}px`;
      this.blob.style.top = `${y - (this.blob.offsetHeight / 2)}px`;
    }
  }
}