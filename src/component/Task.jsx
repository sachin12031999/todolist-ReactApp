import React from 'react';

function Task({title , description , deleteTask , index}) {
  // const { title, description } = props; // we can also write
  return (
    <div className='task'>
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button type="button" for="remove" onClick={()=>deleteTask(index)}>-</button>
      {/* <button type="button">+</button> */}
    </div>
  );
}

export default Task;
