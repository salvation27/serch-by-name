import React from 'react'
import DogCard from './DogCard'

export default function DogList({dogs}) {
  return (
    <div>
      {
        dogs.map((dog,i)=>{
          return <DogCard dog ={dog} key={i} />
        })
      }
    </div>
  )
}
