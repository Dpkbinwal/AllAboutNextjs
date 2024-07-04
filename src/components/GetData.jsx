'use client'

import React from 'react';
import axios from 'axios';

const getData = async () => {
  try{

    const res = await axios.get('http://localhost:3000/api/blogDB/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const posts = res.data;
    console.log(posts);
    return posts;

  }catch(err){
    console.log(err);
  }
};

const GetData = async () => {
  
  const data = await getData();
  return (
    <div>
      <h1 className="p-4">GetData</h1>
      {data.result.map((item, index) => (
        <div key={index}>
          <h2 className='text-rose-800 font-bold'>{item.title}</h2>
          <p>{item.body}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default GetData;
