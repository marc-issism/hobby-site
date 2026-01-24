import Polaroid from "./components/Polaroid";
import './css/bootstrap.css'

function Home() {
  return(
    <>
      hi
      <div className='container'>
        <div className='row'>
          {
            [...Array(4).keys()].map(() => <div className='col-sm'><Polaroid/></div>)
              
          }
        </div>
        
        
      </div>
    </>
  );
}

export default Home
