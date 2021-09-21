import { Component, HostListener, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman-game',
  templateUrl: './hangman-game.component.html',
  styleUrls: ['./hangman-game.component.css'],
})
export class HangmanGameComponent implements OnInit, OnChanges {
  public randomWord: string = '';
  public letterGuess: string = '';
  public gameStatus: string = '';
  public guessedLetters: Array<String> = [];
  public isGuessCorrect: boolean = false;
  public hasPlayerWon: boolean = false;
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
    this.hasLetterBeenGuessed(this.letterGuess);
    this.checkGuess(this.letterGuess);
    this.showGuessedLetter();
  }

  public getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  public startNewGame(): void {
    this.generateRandomWord();
    this.setPlayerLives();
  }
  public generateRandomWord(): string {
    // expected output: 0, 1 or 2
    let randomNumber = this.getRandomNumber(3);

    this.randomWord = this.namesArray[randomNumber];
    return this.randomWord;
  }

  setPlayerLives(): void {
    this.lives = 6;
  }

  public checkGuess(letterGuess: string): void {
    let word = [...this.randomWord];

    this.hasLetterBeenGuessed(letterGuess);
    word.forEach((wordLetter) => {
      console.log(wordLetter);

      if (letterGuess === wordLetter) {
        console.log('great guess');
        //show guessed letter
      }
      return;
    });

    if (this.isGuessCorrect === true) {
      return;
    }
    if (this.isGuessCorrect === false) {
      this.guessedLetters.push(letterGuess);
      this.decreaseLife();
      return;
    }
  }

  public hasLetterBeenGuessed(letterGuess: string): boolean {
    //got to cover the first guess being empty
    if (this.guessedLetters.includes(letterGuess)) {
      console.log(`already guessed ${letterGuess}`);
      this.isGuessCorrect = true;
      return true;
    }
    this.isGuessCorrect = false;
    return false;
  }
  public showGuessedLetter(): void {
    this.guessedLetters;
  }
  public decreaseLife(): void {
    this.lives--;
  }

  public playerWins(): void {}
  public didPlayerLose(): void {
    if (this.lives <= 0) {
      this.lives = 0;
      this.gameStatus = 'You lose';
    }
  }
}
