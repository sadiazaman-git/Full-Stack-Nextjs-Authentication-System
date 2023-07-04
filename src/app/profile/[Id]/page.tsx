import React from 'react'

const ProfileDetail = ({params}:{params:{Id:string}}) => {
  return (
    <div>{params.Id}</div>
  )
}

export default ProfileDetail