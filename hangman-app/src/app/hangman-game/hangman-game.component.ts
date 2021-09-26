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
    this.hasLetterBeenGuessed(this.letterGuess);
    this.checkGuess(this.letterGuess);
    this.showGuessedLetter();
    this.hasPlayerWon();
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

    // this.randomWordUnderscores = ' _ '.repeat(this.answer.length);
    // console.log(this.randomWordUnderscores);

    return this.answer;
  }

  public guessedWord(): string {
    let wordStatus = this.answer
      .split('')
      .map((letter) =>
        this.guessedLettersWord.indexOf(letter) >= 0 ? letter : ' _ '
      )
      .join('');
    console.log(wordStatus);
    return wordStatus;
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
      this.hasPlayerWon();
    } else if (this.answer.indexOf(letterGuess) === -1) {
      this.decreaseLife();
      this.hasPlayerLost();
    }

    // let word = [...this.answer];

    // this.hasLetterBeenGuessed(letterGuess);
    // word.forEach((wordLetter) => {
    //   console.log(wordLetter);

    //   if (letterGuess === wordLetter) {
    //     console.log('great guess');
    //     this.isGuessCorrect = true;
    //     //show guessed letter
    //   }
    //   return;
    // });

    // if (this.isGuessCorrect === true) {
    //   return;
    // }
    // if (this.isGuessCorrect === false) {
    //   this.guessedLetters.push(letterGuess);
    //   this.decreaseLife();
    //   return;
    // }
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

  public hasPlayerWon(): boolean {
    if (this.wordStatus === this.guessedLettersWord.toString()) {
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
