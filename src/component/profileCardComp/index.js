import React from 'react'
import "./index.css"
const ProfileCardComp = ({name,work,discription,pic}) => {
  return (
    <div className='ProfileCardComp'>
      <img src={pic} style={{height:40,width:40,borderRadius:20}}/>
      <p className='ProfileCardComp-Name'>{name}</p>
      <p className='ProfileCardComp-Description'>{work}</p>
      <p className='ProfileCardComp-Description'>{discription}</p>
    </div>
  )
}

export default ProfileCardComp;
