import PolaroidHousing from "../components/PolaroidHousing";
import imagesJSON from '../data/images.json';

const Photography: React.FC = () => {

return(
  <>
  <div className='photography-content container-col'>

    {
      imagesJSON.sets.map((set, index) => 
        <PolaroidHousing imageIDs={set.images} title={set.dateTitle} key={index}/>
      )
    }

    
  </div>
  </>
);}

export default Photography;