import React from 'react'
import Notes from './Notes'

const Home = (props) => {
  let { showAlert } = props
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  )
}

export default Home