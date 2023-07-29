import React from 'react';
import qZone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const Qzone = () => {
  return (
    <div className='bg-secondary text-center py-4 my-4'>
      <h4>Q-Zone</h4>
      <div className="">
        <img src={qZone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  )
}

export default Qzone
