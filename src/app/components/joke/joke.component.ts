import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Joke } from '../../interfaces/joke';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  
  jokes: Joke[];
  currentJoke: any;

  @ViewChild("answerToPresent", {static: false}) _answerToPresent: ElementRef;

  constructor(private _renderer: Renderer2) { }

  ngOnInit() {


    this.jokes = [
      { id:0,
        question:'Where did the computer go dancing? ',
        answer: '-The disc-o!'},
      { id:1,
        question:'What did the janitor say when he jumped out of the closet?', 
        answer: ' Supplies!'},
      { id:2,
        question:'Why did the blind man fall In the well?', 
        answer:'-Because he couldn’t see that well!'},
      { id:3,
        question:'What do you call a magician dog? ', 
        answer:'-A labracadabador!'},
      { id:4,
        question:'What does a baby computer call his father?', 
        answer:' -Data!'},
      { id:5,
        question:'What do you call a hippie’s wife?', 
        answer:' -A Mississippi!'},
      { id:6,
        question:'What do you call a man with a rubber toe?', 
        answer:' -Roberto!'},
      { id:7,
        question:'Why did the can crusher quit his job?', 
        answer:'-Because it was soda pressing!'}]

        this.currentJoke = this.randomJoke();
  }

  randomJoke() {
    return this.currentJoke = this.jokes[Math.floor(Math.random() * this.jokes.length)];
  }
  
  setNewJoke(){
    // We need this class in order to keep the delay 
    this._renderer.removeClass(this._answerToPresent.nativeElement, "answerToPresent")
    this.randomJoke();

  setTimeout(() => {
    this._renderer.addClass(this._answerToPresent.nativeElement, "answerToPresent")
  },20)
  }


}
