import React from 'react'

const CmpData = ({data}) => {
    console.log(data)
    const {name, race, ki, description} = data
  return (
    <div>
        <p><span><b>Name:</b> </span>{name}</p>
        <p><span><b>Race:</b></span>{race}</p>
        <p><span><b>Ki:</b> </span>{ki}</p>
        <p><span><b>Description:</b> </span>{description}</p>
    </div>
  )
}

export default CmpData