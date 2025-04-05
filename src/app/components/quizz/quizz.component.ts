import { Component, Input, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  @Input()
  title: string = ""

  questions: any
  questionSelected: any

  answers: { questionIndex: number, answer: string }[] = []
  answerSelected: string = ""

  questionIndex: number = 0
  questionMaxIndex: number = 0

  finished: boolean = false

  constructor() { }

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length
    }
  }

  playerChoose(value: string) {
    this.answers.push({ questionIndex: this.questionIndex, answer: value })
    this.nextStep()
  }

  async nextStep() {
    this.questionIndex += 1
    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex]
    } else {
      const finalAnswer: string = await this.checkResult(this.answers)
      this.finished = true
      this.answerSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results]
    }
  }

  async checkResult(answers: { questionIndex: number, answer: string }[]) {
    let correctAnswers = 0

    answers.forEach((entry) => {
      const correct = this.questions[entry.questionIndex].correct
      if (entry.answer === correct) {
        correctAnswers++
      }
    })

    const totalQuestions = this.questions.length

    if (correctAnswers === totalQuestions) {
      return "C" // Acertou todas
    } else if (correctAnswers > totalQuestions / 2) {
      return "B" // Acertou a maioria
    } else {
      return "A" // Errou a maioria
    }
  }
}
