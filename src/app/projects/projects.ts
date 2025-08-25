import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
projects = [
  {
    name: 'Grow Green',
    description: 'Grow Green is a recycling awareness website designed to educate Bahraini citizens on sustainable practices. The platform supports Bahrain’s Vision 2030 by promoting eco-friendly habits, providing information on recycling methods, and encouraging community participation toward a greener future',
    image: 'grow-green.png',
    technology: ['HTML', 'CSS', 'Javascript','PHP', 'MySQL']
  },
  {
    name: 'Memory Match-UP',
    description: 'Web-based memory game in which players match pairs of hidden cards. The game incorporates smooth animations and dynamic logic to deliver an engaging and interactive user experience.',
    image: 'memory.png',
    technology: ['HTML', 'CSS', 'Javascript']

  },
  {
    name: 'BuzzNest',
    description: 'A gaming-focused social media platform where users can share posts, join game communities, and connect with fellow gamers. It features group events and personalized profiles, creating an engaging and interactive space for gaming enthusiasts.',
    image: 'buzznest.png',
    technology: ['HTML', 'CSS', 'Javascript', 'Node.js', 'Express.js', 'MongoDB']

  },
  {
    name: 'TasteTogether',
    description: 'A social web app that brings food enthusiasts together to share culinary experiences. Users can post recipes, review restaurants, and participate in live rooms to interact, cook collaboratively, and exchange tips in real time, fostering a vibrant community of food lovers.',
    image: 'tastetogether.png',
    technology: ['React', 'Node.js', 'Express.js', 'MongoDB']

  },
  {
    name: 'MyLifeFlow',
    description: 'A personal productivity and lifestyle management web app designed to help users stay organized and mindful in their daily routines. It offers features such as daily task tracking, budget planning, item location logging with QR codes, restock reminders, and voice journaling — all within a centralized dashboard.',
    image: 'mylifeflow.png',
    technology: ['Python', 'Django', 'PostgreSQL']

  },

]
}
