import React from 'react'

type Props = {
  question: string
  answer: string[]
  callback: any
  userAnswer: boolean
  questionNr: number
  totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question:{questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>

      <div className="answer">
        {answer.map(answer => (
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer}}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard
