import { loader } from '../assets';

const Loader = ( {title} ) => (
  <div className='w-full flex justify-center items-center
  flex-col'>
    <img src={loader} alt="loader" className='w-22 h-22 object-contain' />
  </div>
);

export default Loader;
