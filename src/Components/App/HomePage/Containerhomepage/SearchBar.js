import React from 'react';
import data from './../../../../data/data';
import Employeelist from './EmployeeList';
const Searchbar = () =>(
  <div className='Searchbar'>
    <input type="text" onChange={this.Search =()=>{
        let valueIn = document.querySelector('input').value;
        let regex = new RegExp(valueIn, 'i');
        for (let i = 0; i < document.getElementsByClassName('Employeelist').length; i++) {
          if (regex.test(document.getElementsByClassName('Employeelist')[i].lastChild.firstChild.textContent) === true) {
            document.getElementsByClassName('Employeelist')[i].style.display = 'flex'


          }else{
            document.getElementsByClassName('Employeelist')[i].style.display = 'none';
          }
          
        }
    }}/>
  </div>
)
export default Searchbar;