import React from 'react'
import data from './../../../../data/data';
const Employeelist = () => {
  return (
    data.map((job) =>
      <div className='Employeelist' >
        <div className='employeephoto'>
          <img className='photo' src={job.photo} />
        </div>
        <div className='namecol'>
          <span className='jobname'>{job.name}</span>
          <span className='jobposition'>{job.position}</span>
        </div>
        <div></div>
      </div>
    )

  )
}

export default Employeelist;