import React from 'react'

async function getData (){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
} 

const LearnDataFetching = async() => {
    const data = await getData();
    // console.log(data);
    
    

  return (
    <div className=''>
        <h1>LearnDataFetching</h1>
        <div>
            {data.map((item)=>{
                return <div key={item.id}>
                {item.id}
                {" "}
                {item.title}
                <hr/>
                </div>
            })}
        </div>
    </div>
  )
}

export default LearnDataFetching