import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class Welcome implements OnInit, AfterViewInit {
  @ViewChild('typingText') typingText!: ElementRef;

  texts = ["I am a Software Engineer", "I am a Data Analyst"];
  textIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 100;
  deletingSpeed = 50;
  delayBetweenTexts = 1500;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.type();
  }

  type() {
    const textElement = this.typingText.nativeElement;
    const currentText = this.texts[this.textIndex];

    if (this.isDeleting) {
      textElement.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      textElement.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let currentSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      currentSpeed = this.delayBetweenTexts;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
    }

    setTimeout(() => this.type(), currentSpeed);
  }
}