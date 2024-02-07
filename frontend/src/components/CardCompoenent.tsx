import React from 'react'

interface Card{
    id: number;
    name: string;
    email : string;

}

const CardCompoenent:React.FC<{props: Card}>= ({props}) => {
  return (
    <div>CardCompoenent {props.id} </div>
  )
}

export default CardCompoenent