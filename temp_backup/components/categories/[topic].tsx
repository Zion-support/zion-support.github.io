const TopicPage: NextPage<Props> = ({
  topic, posts 
}) => {
  return (<div> <Head> <title> {
  topic 
}- Zion Blog</title> <PageShareButtons title= {
  `$ {
  topic 
}- Zion Blog` 
}url= {
  typeof window === 'undefined' ? `https://zion.app/categories/$ {
  encodeURIComponent (topic) 
}` : window.location.href 
}description= {
  `Articles about $ {
  topic 
}` 
}onShare= {
  (network) => fetch ('/api/analytics/share', {
  method: 'POST', headers: {
  'Content-Type': 'application/json' 
}, body: JSON.stringify ({
  url: window.location.href, title: `$ {
  topic 
}- Zion Blog`, network, utm: 'utm source=' + network + '&utm medium=share&utm campaign=category' 
}) 
}) .catch ( () => {
  
}) 
}/> </div>) ) 
}</div> <div className='mt-6' ><Link href='/blog' className='underline' >Back to Blog</a></div> </div> </div>) 
}
export default TopicPage