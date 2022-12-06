export default  function Root({authenticated}){
    return <>
    <div>
        <h1> this is a react app 2 {authenticated?'authenticated':"non"}</h1>
    </div>
    </>
}