import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-hangman-game',
  templateUrl: './hangman-game.component.html',
  styleUrls: ['./hangman-game.component.css'],
})
export class HangmanGameComponent implements OnInit {
  public randomWord: string = "";
  public guessedLetters: Array<String> = [];
  public isGuessCorrect: boolean = false;
  public hasPlayerWon: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

  public startNewGame(): void {
    
  };
  public generateRandomWord(): string {
    return "";
  };
  public checkGuess(letterGuess: string): boolean {
    return true || false;
  };
  public showGuessedLetter(letterGuess: string): string {
    return "";
  };
  public decreaseLife(lives: number): number {
    return 0;
  };
  public playerWins(): void {

  };
  public playerLoses(): void {

  };
}
