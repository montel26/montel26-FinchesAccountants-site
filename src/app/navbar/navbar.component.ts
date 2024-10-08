import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] // Corrected from "styleUrl"
})
export class NavbarComponent {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  // Method to handle smooth scrolling
  scrollToSection(sectionName: string) {
    const formattedSectionId = sectionName.toLowerCase().replace('&', '-').replace(' ', '-');
    const targetSection = document.getElementById(formattedSectionId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  }
}
