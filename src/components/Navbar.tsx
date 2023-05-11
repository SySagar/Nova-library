import Stack from "./common/Stack"
import {chat , saved , notification,logo,Hamburger} from '../assets/icons/index'

export default function Navbar() {
  return (
    <div className="Navbar">
      <Stack className="navbar-body" direction="row" width="100%" height="50px">
        <Stack  justifyContent="space-between">
        <img style={{width:'27px'}} src={Hamburger} alt="hamburger"/>
        <img src={logo} alt="logo" />
        </Stack>
        <Stack flexGrow="1" border="1">
        </Stack>

        <Stack className="icons" gap="40">
            <img width={'30px'} src={chat} alt="chat"/>
            <img width={'20px'} src={saved} alt="saved"/>
            <img width={'25px'} src={notification} alt="notification"/>
        </Stack>
      </Stack>
    </div>
  )
}
