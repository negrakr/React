import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerItem = props => {
  const colors = [classes.AnswerItem]

  if (props.state) {
    colors.push(classes[props.state])
  }

  return (
    <li
        className={colors.join(' ')}
        onClick={() => props.onAnswerClick(props.answer.id)}
    >
      { props.answer.text }
    </li>
  )
}

export default AnswerItem