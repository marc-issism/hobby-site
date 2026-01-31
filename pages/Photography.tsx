import Navbar from "../components/Navbar";
import PolaroidHousing from "../components/PolaroidHousing";
import imagesJSON from '../data/images.json';

function Photography() {

return(
  <>
    <Navbar/>
  <div className='photography-content container-col'>

    {
      imagesJSON.sets.map((set) => 
        <PolaroidHousing imageIDs={set.images} title={set.dateTitle}/>
      )
    }

    
  </div>
  </>
);}

export default Photography;