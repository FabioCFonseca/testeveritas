import React from 'react'
import Header from '../Header'

const SemSaldo = ({data}) => {

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <h1 className="font-sans font-medium text-lg text-center">{data.msg}</h1>
      </div>
    </>
  )
}

export default SemSaldo
