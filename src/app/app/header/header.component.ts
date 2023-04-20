import { Component } from '@angular/core';
import { HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  shouldHide = false;

  constructor(private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (window.pageYOffset > 3000) {
      this.shouldHide = true;
      this.renderer.setStyle(document.body, 'padding-top', '50px');
    } else {
      this.shouldHide = false;
      this.renderer.setStyle(document.body, 'padding-top', '0');
    }
  }

}
