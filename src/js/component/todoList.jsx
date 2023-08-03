import React, { useState } from 'react'
import ToDoFooter from './todoFooter'
import ToDoBody from './todoBody'
import ToDoHeader from './todoHeader'

let listItems = [
  {
    id: 1,
    name: "Make the bed"
  },
  {
    id: 2,
    name: "Wash my hands"
  },
  {
    id: 3,
    name: "Eat"
  }
]
const ToDoList = () => {

  const [listData, setList] = useState(listItems)

  const handleCallback = (filterItems) => {
    // Update the component's state
    setList(filterItems)
  }

  const handleSetList = (newInput) => {
    setList((old) => {
      return [...old, { id: listData.length + 1, name: newInput }]
    })
  }
  return (
    <>
      <div className="card m-auto rounded-0">
        <div className="card-body fs-4 p-0">
          <ToDoHeader parentCallback={handleSetList} />
          <ToDoBody lists={listData} parentCallback={handleCallback} />
        </div>
        <div className="card-footer text-muted text-start fw-light bg-white">
          <ToDoFooter lists={listData} />
        </div>
      </div>
      <div className='card rounded-0 m-auto cards'></div>
      <div className='card rounded-0 m-auto cards-bottom'></div>
    </>
  )
}

export default ToDoList