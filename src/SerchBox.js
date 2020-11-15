import React from 'react'

export default function SerchBox({handleInput}) {
  return (
    <div>
      <input onChange={handleInput} type="text" placeholder='поиск'/>
    </div>
  )
}
