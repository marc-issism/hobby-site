import { useEffect } from "react";

interface polaroidProps {
  link: string
}


const delay = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms)
);

function Polaroid(props: polaroidProps) {

  const linkPrepend: string = 'https://drive.google.com/thumbnail?id='; 

  useEffect(() => {
    async function makeRequest() {
      await delay(3000);
    }

    makeRequest();
  })


return(
  <>
    <div className='polaroid'>
      <div className='polaroid-image'>
        <img src={linkPrepend + props.link}></img>
      </div>
    </div>
  </>
);}

export default Polaroid