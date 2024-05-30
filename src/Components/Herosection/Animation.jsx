import { TypeAnimation } from 'react-type-animation';
import './Herosection.css'
const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We extract articles from websites',
        1000, // wait 1s before replacing "websites" with "texts"
        'We summarize lengthy texts',
        1000,
        'We simplify complex information',
        1000,
        'We condense articles into key points',
        1000,
        'Our web app extracts, summarizes, and simplifies text using AI'        
      ]}
      className='g-txt'
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Animation;