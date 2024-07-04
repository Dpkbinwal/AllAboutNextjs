import React from 'react'
import connectDB from '@/lib/connectDB';
import PostModel from '@/models/Post';



const GetDataServerAction = async() => {
    await connectDB()
    const data = await PostModel.find();
   
    return (
      <div>
        <h1 className="p-4">GetData</h1>
        {data.map((item, index) => (
          <div key={index}>
            <h2 className='text-rose-800 font-bold'>{item.title}</h2>
            <p>{item.body}</p>
            <hr/>
          </div>
        ))}
      </div>
    )
}

export default GetDataServerAction