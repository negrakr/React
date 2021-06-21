import React from 'react'
import classes from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }
    return total
  }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        { props.quiz.map((quizItem, index) => {
          const res = [
            'fa',
            props.results[quizItem.id] === 'success' ? 'fa-check' : 'fa-times',
            classes[props.results[quizItem.id]]
          ]

          return (
            <li key={index}>
              <strong>{index + 1}.&nbsp;</strong>
              {quizItem.question}
              <i className={res.join(' ')} />
            </li>
          )
        }) }
      </ul>
      <p>Правильно {successCount} из {props.quiz.length}</p>
      <div>
        <Button onClick={props.onRetry} type="primary">Повторить</Button>
        <Link to={'/'}>
          <Button type="success">Перейти к списку тестов</Button>
        </Link>
      </div>
    </div>
  )
}

export default FinishedQuiz