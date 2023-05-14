import Stack from "./common/Stack"
import Tab from "./common/Tab"
import PostCard from "./PostCard"
import Cards from "./Cards"

export default function Main() {
  return (
    <div className="main" style={{width:'100%',marginTop:'30px'}} >
      <Stack direction="row" position="relative" className="main-body" width="70%" >
        <Stack width="70%" position="relative" direction="column" >
            <PostCard></PostCard>
              <Tab></Tab>
            <Cards></Cards>
        
        </Stack>

        <Stack width="30%" border="1"></Stack>
      </Stack>
    </div>
  )
}
