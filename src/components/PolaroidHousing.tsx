import Polaroid from "./Polaroid";

interface polaroidHousingProps {
  imageIDs: string[];
  title: string;
}

function PolaroidHousing(props: polaroidHousingProps)  {

  return(
    <>
      
      <div className='polaroid-housing container-col center'>

        <div className='title container'>
          <div>{props.title}</div>
        </div>
        <div className='polaroid-content'>
          {props.imageIDs.map((id, index)=>
            <Polaroid link={id} key={index}/>
          )}
        </div>
        
      </div>
    </>
  );
}

export default PolaroidHousing;