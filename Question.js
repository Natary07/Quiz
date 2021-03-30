class Question {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
    }
  
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("MyQuiz Game");
      title.position(350, 0);
      
     this.question.html("Question: - What starts and ends with the letter 'E', but has only one letter?");
     this.question.position(150,80);
     this.option1.html("1: Everyone ");
     this.option1.position(150,100);
     this.option2.html("2: Envelope");
     this.option2.positioin(150,120;)
      }
  
    }
  
  