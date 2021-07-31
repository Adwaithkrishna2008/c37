class Question{
constructor(){
this.title=createElement('h2')
this.opt1=createElement('h5')
this.opt2=createElement('h5')
this.opt3=createElement('h5')
this.opt4=createElement('h5')
this.question=createElement('h2')


this.input1=createInput("ENTER YOUR NAME HERE")
this.input2=createInput("ENTER CORRECT OPTION NO:")
this.button=createButton('Submit')
}
hide(){
this.title.hide()
this.input1.hide()
this.input2.hide()
this.button.hide()
    
}

display(){
this.title.html("ADWAITH'S QUIZ")
this.title.position(350,20)


this.question.html("What is the full form of RT PCR ? ")
this.question.position(150,80)

this.option1.html("1: reverse transcription polymerase chain reaction")
this.option1.position(150,100)

this.option2.html("2: real time positivity check Rate")
this.option2.position(150,120)

this.option3.html("3: real time patient check rate")
this.option3.position(150,140)

this.option4.html("4: reverse polymerase transcription reaction chain ")
this.option4.position(150,160)

this.input1.position(200,560)
this.input2.position(340,850)
this.input3.position(290,300)

this.button.mousePressed(()=>{

this.title.hide()
this.input2.hide()
this.input1.hide()
this.button.hide()

contestant.name=this.input1.value();
contestant.answer=this.input2.value();
contestantCount+=1;
contestant.index=contestantCount;
contestant.update()
contestant.updateCount(contestantCount);
})
question = new Question();
question.display();

}
 


}












