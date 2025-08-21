import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Welcome } from './welcome/welcome';

@Component({
  selector: 'app-root',
  imports: [Navbar, Welcome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('profile');
}
