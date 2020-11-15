import React from 'react'

export default function DogCard({dog}) {
  const {name,breed} = dog
  return (
    <div className='card br'>
      <div className="card_name">
        <h1>{name}</h1>
      </div>
      <div className="card_name" style={{fontSize:20}}>
        {breed}
      </div>
    </div>
  )
}
