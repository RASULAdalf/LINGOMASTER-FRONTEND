import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Feature {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public router:Router,public activated_route:ActivatedRoute){}
  features: Feature[] = [
    { image: 'assets/images/interactive-learning.png', title: 'Interactive Lessons', description: 'Learn through engaging exercises and activities.' },
    { image: 'assets/images/native-voice.png', title: 'Native Speaker Audio', description: 'Immerse yourself with authentic pronunciation.' },
    { image: 'assets/images/personalized-learning.png', title: 'Personalized Learning', description: 'Tailored experience based on your progress.' },
  ];
  currentYear: number = new Date().getFullYear();

  title = 'LingoMaster';
}
