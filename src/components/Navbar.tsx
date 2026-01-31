import { Link } from "react-router-dom";
function Navbar() {
return(
  <>
    <div className='nav container-row'>
      <div className='nav-title '>M a r c i s s i s m</div>
      <div className='nav-content '>
        <ul>
        <li>
          <Link to='/photography'>Photography</Link>
        </li>
        <li>
          <Link to='/transit'>Transit</Link>
          <div className='circle'></div>
        </li>
        <li>
          <Link to='/languages'>Languages</Link>
          <div className='circle'></div>
        </li>
        <li>
          <Link to='/coffee'>Coffee</Link>
          <div className='circle'></div>
          </li>
        <li>
          <Link to='/gaming'>Gaming</Link>
          <div className='circle'></div>
        </li>
       </ul>   
      </div>
    </div>
  </>
);}

export default Navbar