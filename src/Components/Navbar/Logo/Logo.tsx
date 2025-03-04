import './Logo.scss';

import getsuka from '../../../assets/getsuka-logo.png';

function Logo() {

  return (
    <div className="logo lg:hover:bg-primary lg:focus:bg-primary lg:max-w-[500px] lg:border-[5px] bg-white lg:border-primary lg:rounded-r-[40px] relative z-10 w-auto lg:w-[30vw] PC:w-[50vw]">
      <a href="#" className='flex items-center lg:block'>
        <img className="mr-2 block lg:hidden w-[38px] h-[38px]" src={getsuka} alt="Getsuka" />
      </a>
    </div>
  )
}

export { Logo };