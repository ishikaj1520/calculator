import {BiSquare} from "react-icons/bi";
import {VscChromeMinimize}  from "react-icons/vsc";
import {MdClose} from "react-icons/md"
const Navbar = () => {
    return ( <div className='navbar' style={{
     height:'20px'
    }}>
        <button><VscChromeMinimize/></button>
        <button><BiSquare/></button>
        <button><MdClose  color="white"/></button>
    </div> );
}
 
export default Navbar;