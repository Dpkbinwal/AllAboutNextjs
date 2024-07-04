
const MyProfile = ({params}) => {
    const id= params.id;
    console.log(params)
  return (
    <div>UserId {id}</div>
  )
}

export default MyProfile