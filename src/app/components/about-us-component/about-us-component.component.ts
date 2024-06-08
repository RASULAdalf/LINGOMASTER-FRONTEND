import { Component } from '@angular/core';

interface TeamMember {
  image: string;
  name: string;
  title: string;
}

@Component({
  selector: 'app-about-us-component',
  templateUrl: './about-us-component.component.html',
  styleUrl: './about-us-component.component.scss'
})
export class AboutUsComponentComponent {
  team: TeamMember[] = [
    { image: 'assets/images/team1.jpg', name: 'Rasula Rathnayake', title: 'team member' },
    { image: 'assets/images/team2.jpg', name: 'Shakira', title: 'team member' },
    
  ];
  currentYear: number = new Date().getFullYear();

}
