import React from 'react';
import socket from '../socket';

function JoinBlock() {
  console.log(socket);
  return (
    <div className='join-section'>
      <input type='text' placeholder='room id' />
      <input type='text' placeholder='your name' />
      <button className='btn btn-success'>Connect</button>
    </div>
  )
}

export default JoinBlock;
