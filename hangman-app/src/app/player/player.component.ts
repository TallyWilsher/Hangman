import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  public letterGuess: string = '';
  public lives: number = 6;

  constructor() {}

  ngOnInit(): void {}

  guessLetter(keyUp: Event): string {
    return '';
  }
  setPlayerLives(): void {
    this.lives = 6;
  }
}
