import { Component, HostListener, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman-game',
  templateUrl: './hangman-game.component.html',
  styleUrls: ['./hangman-game.component.css'],
})
export class HangmanGameComponent implements OnInit, OnChanges {
  public answer: string = '';
  public wordStatus: string = '';
  public letterGuess: string = '';
  public gameStatus: string = '';
  public guessedLetters: Array<String> = [];
  public guessedLettersWord: Array<String> = [];
  public wrongGuessedLetters: Array<String> = [];
  public isGuessCorrect: boolean = false;
  public isPlayerWinner: boolean = false;
  public lives: number = 0;

  public namesArray = ['naruto', 'sasuke', 'sakura'];

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.letterGuess = event.key;
    console.log(this.letterGuess);
    this.checkGuess(this.letterGuess);
  }

  constructor() {}

  ngOnInit(): void {
    this.setPlayerLives();
  }

  ngOnChanges(): void {
    // this.hasLetterBeenGuessed(this.letterGuess);
    this.checkGuess(this.letterGuess);
    // this.showGuessedLetter();
    this.hasPlayerWon(this.wordStatus);
  }

  public getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  public startNewGame(): void {
    this.generateRandomWord();
    this.setPlayerLives();
    this.guessedWord();
  }
  public generateRandomWord(): string {
    // expected output: 0, 1 or 2
    let randomNumber = this.getRandomNumber(3);
    this.answer = this.namesArray[randomNumber];

    return this.answer;
  }

  public guessedWord(): string {
    this.wordStatus = this.answer
      .split('')
      .map((letter) =>
        this.guessedLettersWord.indexOf(letter) >= 0 ? letter : ' _ '
      )
      .join('')
      .toString();
    console.log(this.wordStatus);
    return this.wordStatus;
  }

  setPlayerLives(): void {
    this.lives = 6;
  }

  public checkGuess(letterGuess: string): void {
    this.guessedLetters.indexOf(letterGuess) === -1
      ? this.guessedLettersWord.push(letterGuess)
      : null;

    if (this.answer.indexOf(letterGuess) >= 0) {
      this.guessedWord();
      this.hasPlayerWon(this.wordStatus);
    } else if (this.answer.indexOf(letterGuess) === -1) {
      this.wrongGuessedLetters.push(letterGuess);
      this.decreaseLife();
      this.hasPlayerLost();
    }
  }

  // public hasLetterBeenGuessed(letterGuess: string): boolean {
  //   if (this.guessedLetters.includes(letterGuess)) {
  //     console.log(`already guessed ${letterGuess}`);
  //     this.isGuessCorrect = true;
  //     return true;
  //   }
  //   this.isGuessCorrect = false;
  //   return false;
  // }
  // public showGuessedLetter(): void {
  //   this.guessedLetters;
  // }
  public decreaseLife(): void {
    this.lives--;
  }

  public hasPlayerWon(wordStatus: string): boolean {
    if (wordStatus === this.answer.toString()) {
      this.gameStatus = 'You Win!!!';
      this.isPlayerWinner = true;
    }
    return true;
  }
  public hasPlayerLost(): boolean {
    if (this.lives <= 0) {
      this.lives = 0;
      this.gameStatus = 'You lose';
      this.isPlayerWinner = false;
    }
    return this.isPlayerWinner;
  }
}
