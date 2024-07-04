"use client"

import { useRouter } from "next/navigation"
const LearnUseRouter = () => {
    const router = useRouter();
    // console.log("Router",router);
  return (
    <>
    {/* <div>LearnUseRouter</div> */}
    <button type="button" onClick={()=>router.push("/admin/dashboard")}>Go to Admin Dash</button>
    
    </>
  )
}

export default LearnUseRouter