import { Link, useLocation } from "react-router-dom";
function Navbar() {

  const NAVLIST = ['Photography', 'Transit', 'Languages', 'Coffee', 'Gaming'];
  const location = useLocation();
  console.log(location.pathname);

return(
  <>
    <div className='nav container-row'>
      <div className='nav-title container-col'>

        <div>M a r c i s s i s m</div>
      </div>

      <div className='navbar-content container-row'>
        {
          NAVLIST.map((item, index)=> (

            <div key={index} className='navbar-item container-col'>
              <Link to={`/${item}`}>
              <div className='navbar-item-top'>
                {item}
              </div>
              <div className='navbar-item-bottom container-col'>
                <div className={`circle
                  ${location.pathname==='/'+item ? 'selected' : ''}
                `} />
                <div className={`line 
                  ${index===0 ? 'first-line' : '' } 
                  ${index===(NAVLIST.length-1) ? 'last-line' : '' }`} />
              </div>
              </Link>
            </div>

          ))
        }
      </div>

      {/* <div className='nav-content '>
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
      </div> */}
    </div>
  </>
);}

export default Navbar