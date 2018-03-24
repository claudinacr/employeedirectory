import React from 'react'
import Header from './Containerhomepage/Header';
import Searchbar from './Containerhomepage/SearchBar';
import Employeepage from './Containerhomepage/EmployeeList';
const HomePage = () =>(
  <div className='HomePage'>
      <Header></Header>
      <Searchbar></Searchbar>
      <div className='Containeremployeepage'>
      <Employeepage></Employeepage>
      </div>
  </div>
)
export default HomePage;