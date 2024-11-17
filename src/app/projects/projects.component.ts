import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      duration: 'Aug 2024 - Sep 2024',
      description:
        'Portfolio App is an Angular-based application I developed to showcase my skills, projects, and experience. The app features an interactive and responsive design, highlighting my work in web development, programming, and internships. It serves as a professional platform for potential employers and collaborators to learn about my background and expertise, demonstrating my proficiency in Angular and front-end development.',
      skills: 'Angular',
      link: 'https://johannasmriti.github.io/johanna_portfolio/',
      thumbnail: '/assets/portfolio-full.png',
      image: '/assets/portfolio-full.png',
    },
    {
      title: 'Plant Management App',
      duration: 'Feb 2024 - Mar 2024',
      description:
        "Plant Management App is an Angular-based application I developed for my dad's farm to streamline the management of crops and plants. The app allows for tracking plant growth, scheduling watering and fertilization, and monitoring health metrics, providing a comprehensive tool for efficient farm management. This project demonstrates my proficiency in Angular and my ability to create practical solutions for real-world agricultural needs.",
      skills: 'Angular · Spring Boot',
      link: 'https://gabrimol.com/',
      thumbnail: 'assets/plant-management-thumbnail.png',
      image: 'assets/plant-management-full.jpg',
    },
    {
      title: 'Grievance Redressal System',
      duration: 'Sep 2021 - Nov 2021',
      description:
        'Grievance Redressal System is a web application built using PHP and SQL to facilitate the reporting and resolution of complaints. It allows users to submit grievances, track their progress, and receive real-time updates. This project highlights my skills in back-end development and database management, focusing on creating an efficient and user-friendly solution for better communication and transparency.',
      skills: 'HTML · CSS · JavaScript · PHP · SQL',
      link: 'https://johannasmriti.github.io/GrievanceRedressalSystem/',
      thumbnail: 'assets/grievance-thumbnail.png',
      image: 'assets/grievance-full.jpg',
    },
    {
      title: 'Data Structures Study Website',
      duration: 'May 2021 - Jul 2021',
      description:
        'DS Study is a collaborative project I developed with my friend Keerthna, focusing on creating a sleek and intuitive user interface for a data structures study platform. While the site currently has no content, it showcases a clean design and navigation, built using HTML, CSS, and JavaScript, highlighting our efforts in building an engaging and user-friendly educational platform.',
      skills: 'HTML · CSS · JavaScript',
      link: 'https://johannasmriti.github.io/NoLimits/',
      thumbnail: 'assets/ds-study-thumbnail.png',
      image: 'assets/ds-study-full.jpg',
    },
    {
      title: 'Chingari Trust',
      duration: 'Jul 2020 - Aug 2020',
      description:
        "Chingari Trust is a website I developed during my first internship for an NGO dedicated to supporting children affected by the Bhopal Gas Tragedy. Built using HTML, CSS, and JavaScript, the site provides information about the organization's mission, ongoing projects, and ways to contribute, aiming to raise awareness and engage donors. This project allowed me to apply my web development skills to create a meaningful and impactful platform for a noble cause.",
      skills: 'HTML · CSS · JavaScript',
      link: 'https://johannasmriti.github.io/chingari/index.html',
      thumbnail: 'assets/chingari-thumbnail.png',
      image: 'assets/chingari-full.jpg',
    },
    {
      title: 'Visit Nilgiris',
      duration: 'Apr 2020 - May 2020',
      description:
        'Visit Nilgiris is my first website, created using HTML, CSS, and JavaScript, showcasing the scenic beauty, culture, and attractions of the Nilgiris region. It highlights popular destinations and travel tips, demonstrating my foundational web development skills in a visually engaging format.',
      skills: 'HTML · CSS · JavaScript · UIX',
      link: 'https://johannasmriti.github.io/visitnilgiriscss/',
      thumbnail: 'assets/visit-nilgiris-thumbnail.png',
      image: 'assets/visit-nilgiris-full.png',
    },
  ];
  selectedProject: any = null;

  expandCard(project: any) {
    this.selectedProject = project;
  }

  collapseCard() {
    this.selectedProject = null;
  }
}
