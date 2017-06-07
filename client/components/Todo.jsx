import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({title, tags, completed}) => {
  const tagElements = tags.map((el, index) => {
    return <span key={index} className="todo-tag">{el}</span>
  });
  
  return (
    <li className="todo cont-row">
      <span>
        <i>[]</i>
        <span className="todo-title">{title}</span>
        {tagElements}
      </span>
      <span>
        <span className="todo-icons hidden">*Icons*</span>
      </span>
    </li>
  )
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  completed: PropTypes.bool.isRequired,
}

export default Todo;