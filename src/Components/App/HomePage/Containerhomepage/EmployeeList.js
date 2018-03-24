import React from 'react';
import data from './../../../../data/data';
import Dataemployee from './../../EmployeePage/Containeremployee/Dataemployee';

const Employeelist = () => {

  return (
    data.map((job) =>
      <div className='Employeelist'  key ={job.id} onClick={this.Search =()=>{
        document.querySelector('.dataphoto').appendChild(document.createElement('img')).setAttribute('src', job.photo);
        document.querySelector('.datanamee').appendChild(document.createElement('span')).appendChild(document.createTextNode(job.name))
        document.querySelector('.datajobb').appendChild(document.createElement('span')).appendChild(document.createTextNode(job.position))

        document.querySelector('.calloffice').appendChild(document.createElement('span')).appendChild(document.createTextNode(job.Office))
        document.querySelector('.callmovile').appendChild(document.createElement('span')).appendChild(document.createTextNode(job.Mobile))
        document.querySelector('.sms').appendChild(document.createElement('span')).appendChild(document.createTextNode(job.sms))
        document.querySelector('.email').appendChild(document.createElement('span')).appendChild(document.createTextNode(job.email))


        }}>
        <div className='employeephoto'>
          <img className='photo' src={job.photo} />
        </div>
        <div className='namecol'>
          <span className='jobname'>{job.name}</span>
          <span className='jobposition'>{job.position}</span>
        </div>

      </div>
    )

  )
}

export default Employeelist;