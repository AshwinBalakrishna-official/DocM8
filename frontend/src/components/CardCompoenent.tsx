import React from 'react'

interface Card{
    Id: number;
    name: string;
    email : string;

}

const CardCompoenent:React.FC<{props: Card}>= ({props}) => {
  return (
    <>
        <div>ID : {props.Id} </div>
        <div>Name : {props.name} </div>
        <div>Email : {props.email}</div>
    </>
  )
}

export default CardCompoenent