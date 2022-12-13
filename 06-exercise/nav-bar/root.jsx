export default function Root(){
return <>
<nav>
    <div style={{display:'flex',width:'100%' }}>
    <a href="/" onClick={($event)=>singleSpaNavigate($event)} style={{margin:10}}>Home</a>
    <a href="/profile" onClick={($event)=>singleSpaNavigate($event)} style={{margin:10}}>Profile</a>
    </div>
</nav>
</>
}