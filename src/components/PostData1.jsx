'use client'
import react,{ useState } from "react"
const PostData1 = () => {

    const [formData, setFormData] = useState({
        title:'',
        body:''
    });

    const handleSubmit = async(e)=>{
        e.preventDefault()
        // console.log(formData)
        const res  = await fetch("http://localhost:3000/api/blogDB/posts",{method:"POST",body: JSON.stringify(formData)});
        console.log("response : ",res)
        setFormData({
            title:'',
            body:''
        })
        window.location.reload();
    }
   
    const handleChange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }


  return (
    <main>
        <form action="" onSubmit={handleSubmit}>
            Title: <input type="text" name="title" value={formData.title} onChange={handleChange} className="text-black p-2" />
            <br/><br/>
            Body: <input type="text" name="body" value={formData.body} onChange={handleChange} className="text-black p-2" />
            <br/><br/>
            <button type="submit" className="p-2 bg-rose-600">Submit</button>
        </form>
    </main>
  )
}

export default PostData1