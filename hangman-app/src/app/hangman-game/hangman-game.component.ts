import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman-game',
  templateUrl: './hangman-game.component.html',
  styleUrls: ['./hangman-game.component.css'],
})
export class HangmanGameComponent implements OnInit {
  public randomWord: string = '';
  public guessedLetters: Array<String> = [];
  public isGuessCorrect: boolean = false;
  public hasPlayerWon: boolean = false;

  public namesArray = ['naruto', 'sasuke', 'sakura'];

  constructor() {}

  ngOnInit(): void {}

  public getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  public startNewGame(): void {
    this.generateRandomWord();
  }
  public generateRandomWord(): string {
    // expected output: 0, 1 or 2
    let randomNumber = this.getRandomNumber(3);

    this.randomWord = this.namesArray[randomNumber];
    return this.randomWord;
  }
  public checkGuess(letterGuess: string): boolean {
    return true || false;
  }
  public showGuessedLetter(letterGuess: string): string {
    return '';
  }
  public decreaseLife(lives: number): number {
    return 0;
  }
  public playerWins(): void {}
  public playerLoses(): void {}
}
