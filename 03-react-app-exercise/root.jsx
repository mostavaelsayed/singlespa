export default  function Root({authenticated}){
    return <>
    <div>
        <h1> this is a react app {authenticated?'authenticated':"non"}</h1>
    </div>
    </>
}