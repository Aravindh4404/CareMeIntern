'use client'

import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';

import { Button } from '../components/Button';
import { Container } from '../components/Container';
// import { Logo } from './Logo';
import { NavLink } from '../components/NavLink';
import { FaHandsHelping } from 'react-icons/fa';
import { BsGlobe2 } from 'react-icons/bs';
import Image from 'next/image';

type Submenu = {
  href: string;
  label: string;
  description: string;
  header?:string;
};

type MobileNavLinkProps = {
  href: string;
  children: React.ReactNode;
  submenus?: Submenu[];
};

function MobileNavLink({ href, children, submenus}: MobileNavLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  if (submenus) {
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleAccordion}
        >
          <Link href={href} className="block w-full p-2 font-body text-secondary font-medium opacity-75 text-sm">
            {children}
          </Link>
          <svg
            className={`w-6 h-6 transition-transform text-secondary ${
              isOpen ? 'transform rotate-90' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
        {isOpen && (
          <div className="pl-4 mt-2">
            
            {submenus.map((submenu) => (
              <div key={submenu.href} className="mb-2">
                {submenu.header&&<h1 className='text-gray-600 pt-3 font-medium opacity-50 text-xs'>{submenu.header}</h1>}
                <Link href={submenu.href} className="block p-2 pl-0 text-secondary font-medium opacity-75 text-sm">
                  {submenu.label}
                </Link>
                <p className="text-xs text-gray-400 w-10/12">{submenu.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2 font-body text-secondary font-medium opacity-75 text-sm">
      {children}
    </Popover.Button>
  );
}


interface MobileNavIconProps {
  open: boolean;
}

function MobileNavIcon({ open }: MobileNavIconProps) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx('origin-center transition', open && 'scale-90 opacity-0')}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx('origin-center transition', !open && 'scale-90 opacity-0')}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center  justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 "
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 "
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95 transform -translate-x-full"
          enterTo="opacity-100 scale-100 "
          leave="duration-200 ease-in "
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            style={{ maxHeight: '86vh' }}
            className="absolute inset-x-0 min-h-72 overflow-y-scroll top-full mt-4 flex origin-top flex-col rounded-sm bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Why Togthr</MobileNavLink>
            <MobileNavLink href="#features" 
            submenus={[
              { href: '#feature1', label: 'Patient Enagagement', description: 'Empowering patients in their healthcare journey' }, 
              { href: '#feature1', label: 'Continuity of Care', description: 'Seamless coordination for comprehensive treatment' }, 
              { href: '#feature1', label: 'Calendar', description: 'Efficient and optimized appointment scheduling' }, 
              { href: '#feature1', label: 'Insights and Reporting', description: 'Data-driven analysis for informed decision-making' }, 
              { href: '#feature1', label: 'Tele Consultation', description: ' Convenient remote medical consultations' }, 
              { href: '#feature1', label: 'E-prescribing', description: 'Secure digital prescription management' }, 
              { href: '#feature1', label: 'Mobile Apps', description: 'User-friendly healthcare applications' },]}>
              Features
            </MobileNavLink>
            <MobileNavLink href="#pricing">Customer Services</MobileNavLink>
            <MobileNavLink href="#pricing" 
            submenus={[
            { href: '#resource1',header:'COMPANY', label: 'About Togthr', description: 'Empowerment of patients in their healthcare journey' }, 
            { href: '#resource2', label: `Careers-We're hiring!`, description: 'Join our team and be part of healthcare coordination' },
            { href: '#resource2',header:'RESOURCES', label: `Togthr Blog`, description: 'Stay informed with data-driven analysis and reporting' },
            { href: '#resource2', label: `Togthr University`, description: 'Convenient and efficient remote medical consultations' },
            { href: '#resource2',header:'SUPPORT', label: `Help Center`, description: 'Access our help center for healthcare services' },
            
            ]}>
              Resources
            </MobileNavLink>
            <MobileNavLink href="#pricing">Compare plan</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

interface HeaderProps {
  // Add any props you need for the Header component
  auth:boolean
}

const Header: React.FC<HeaderProps> = ({auth}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleFeaturesDropdownToggle = () => {
    setShowFeaturesDropdown(!showFeaturesDropdown);
  };

  const handleResourcesDropdownToggle = () => {
    setShowResourcesDropdown(!showResourcesDropdown);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`bg-primary py-5 sticky top-0 z-50 border-b ${isHeaderFixed?'shadow-md':'shadow-sm'}`}>
    <Container>
      <nav className="relative z-50 flex justify-between ">
        <div className="flex items-center lg:gap-x-4 md:gap-x-12">
          <Link href="#" className="font-headers  rounded-lg p-2 px-3 border border-primary text-xl text-white" aria-label="Home">
           {/* <Image 
           alt='Logo'
           src={require('../images/logos/logocolortext.svg')}
           style={{width:'100px',height:'40px'}}
           /> */}
          </Link>
          <div className="hidden lg:flex lg:gap-x-3">
      <NavLink href="#features">Why Togthr</NavLink>

      <div
        className="relative group"
        onMouseEnter={handleFeaturesDropdownToggle}
        onMouseLeave={handleFeaturesDropdownToggle}
      >
        <NavLink href="#testimonials">
          Features
          {showFeaturesDropdown ? (
            <svg
              className="ml-1 h-4 w-4 inline transition-transform duration-300 transform "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3.586L3.707 9.879a1 1 0 001.414 1.414L10 6.414l4.879 4.879a1 1 0 001.414-1.414L10 3.586z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="ml-1 mb-1 h-4 w-4 inline transition-transform duration-300 transform rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3.586L3.707 9.879a1 1 0 001.414 1.414L10 6.414l4.879 4.879a1 1 0 001.414-1.414L10 3.586z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </NavLink>
        {showFeaturesDropdown && (
            <div className="absolute mt-2 flex px-5 py-8 z-20 w-[750px] bg-white border border-gray-200 rounded shadow-md">
              {/* Dropdown content for Features */}
            <div className='flex flex-col mx-3'>
            <div>
            <NavLink  href="#feature1">
              <span className='text-secondary font-body font-semibold opacity-75'>Patient Enagagement</span>
              <p className='w-48 pb-3 text-sm font-body'>Empowering patients in their healthcare journey</p>
              </NavLink>
            <hr className='pt-2' />
            </div>
            <div>
            <NavLink href="#feature2">
              <span className='text-secondary font-body font-semibold opacity-75'>Continuity of Care</span>
              <p className='w-48 text-sm font-body pb-3'>Seamless coordination for comprehensive treatment</p>
              
              </NavLink>
            <hr className='pt-2' /></div>
            <div><NavLink href="#feature3">
              <span className='text-secondary font-body font-semibold opacity-75'>Calendar</span>
              <p className='w-48 text-sm font-body pb-3'>Efficient and optimized appointment scheduling </p>
              </NavLink>
            <hr className='pt-2' /></div>
            </div>
            <div className='flex flex-col mx-3'>

            <div><NavLink href="#feature3">
               <span className='text-secondary font-body font-semibold opacity-75'>Insights and Reporting</span>
              <p className='w-48 text-sm font-body pb-3' >Data-driven analysis for informed decision-making</p>
              </NavLink>
            <hr className='pt-2' /></div>
            <div><NavLink href="#feature3">
                <span className='text-secondary font-body font-semibold opacity-75'>Tele Consultation</span>
              <p className='w-48 text-sm font-body pb-3'> Convenient remote medical consultations</p>
              </NavLink>
            <hr className='pt-2' /></div>
            <div><NavLink href="#feature3">
              <span className='text-secondary font-body font-semibold opacity-75'>E-prescribing</span>
              <p className='w-48 text-sm font-body pb-3'>Secure digital prescription management</p>
              </NavLink>
            <hr className='pt-2' /></div>
            </div>
            <div>
            <NavLink href="#feature3">
               <span className='text-secondary font-body font-semibold opacity-75'>Mobile Apps</span>
              <p className='w-48 text-sm font-body pb-3'>User-friendly healthcare applications</p>
              </NavLink>
              <hr className='pt-2' /></div>
          </div>
        )}
      </div>

      <NavLink href="#pricing">Customer Stories</NavLink>

      <div
        className="relative group"
        onMouseEnter={handleResourcesDropdownToggle}
        onMouseLeave={handleResourcesDropdownToggle}
      >
        <NavLink href="#pricing">
          Resources
          {showResourcesDropdown ? (
            <svg
              className="ml-1  h-4 w-4 inline transition-transform duration-300 transform "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3.586L3.707 9.879a1 1 0 001.414 1.414L10 6.414l4.879 4.879a1 1 0 001.414-1.414L10 3.586z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="ml-1 mb-1 h-4 w-4 inline transition-transform duration-300 transform rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3.586L3.707 9.879a1 1 0 001.414 1.414L10 6.414l4.879 4.879a1 1 0 001.414-1.414L10 3.586z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </NavLink>
        {showResourcesDropdown && (
          <div className="absolute mt-2 flex px-5 py-8 w-[750px] bg-white border border-gray-200 rounded shadow-md ">
          {/* Dropdown content for Features */}
        <div className='flex flex-col mx-3'>
        <div>
          <h2 className='pl-2 text-gray-500 font-semibold pb-3'>COMPANY</h2>
        <NavLink  href="#feature1">
          <span className='text-secondary font-body font-semibold opacity-75'>About Togthr</span>
          <p className='w-48 pb-3 text-sm font-body'>Empowerment of patients in their healthcare journey</p>
          </NavLink>
        <hr className='pt-2' />
        </div>
        <div>
        <NavLink href="#feature2">
          <span className='text-secondary font-body font-semibold opacity-75'>Careers-We are hiring!</span>
          <p className='w-48 text-sm font-body pb-3'>Join our team and be part of healthcare coordination</p>
          
          </NavLink>
        <hr className='pt-2' /></div>
        </div>
        <div className='flex flex-col mx-3'>
        <h2 className='pl-2 text-gray-500 font-semibold pb-3'>RESOURCES</h2>
        <div><NavLink href="#feature3">
           <span className='text-secondary font-body font-semibold opacity-75'>Togthr Blog</span>
          <p className='w-48 text-sm font-body pb-3' >Stay informed with data-driven analysis and reporting</p>
          </NavLink>
        <hr className='pt-2' /></div>
        <div><NavLink href="#feature3">
            <span className='text-secondary font-body font-semibold opacity-75'>Togthr University</span>
          <p className='w-48 text-sm font-body pb-3'> Convenient and efficient remote medical consultations </p>
          </NavLink>
        <hr className='pt-2' /></div>
        </div>
        <div>
        <h2 className='pl-2 text-gray-500 font-semibold pb-3'>SUPPORT</h2>
        <NavLink href="#feature3">
           <span className='text-secondary font-body font-semibold opacity-75'>Help Center</span>
          <p className='w-48 text-sm font-body pb-3'>Access our help center for healthcare services</p>
          </NavLink>
          <hr className='pt-2' /></div>
      </div>
        )}
      </div>

      <NavLink href="#pricing">Compare Plan</NavLink>
    </div>
        </div>
        <div className="flex items-center gap-x-5 md:gap-x-8">
          <div className="hidden md:block">
            <NavLink href="/login">
              <BsGlobe2 />
            </NavLink>
          </div>
          {/* <div className="hidden md:block">
            <NavLink href="/login">Signin</NavLink>
          </div> */}
          {auth ? (
            <div className="flex flex-col relative">
              {/* Avatar button */}
              {/* <Image
                id="avatarButton"
                data-dropdown-toggle="userDropdown"
                data-dropdown-placement="bottom-start"
                className="w-10 h-10 rounded-full cursor-pointer"
                src={require('../images/avatars/avatar-5.png')}
                alt="User dropdown"
                onClick={toggleDropdown}
              /> */}

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  id="userDropdown"
                  className="z-10 bg-secondary divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600 absolute top-full right-[-60px]"
                >
                  {/* <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                    <div className="font-medium truncate">name@flowbite.com</div>
                  </div> */}
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                    <li>
                      <a href="#" className="block px-4 text-white py-2 hover:bg-gray-100 hover:text-secondary dark:hover:bg-gray-600 dark:hover:text-white">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 text-white py-2 hover:bg-gray-100 hover:text-secondary dark:hover:bg-gray-600 dark:hover:text-white">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block text-white px-4 py-2 hover:bg-gray-100 hover:text-secondary dark:hover:bg-gray-600 dark:hover:text-white">
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="block text-white px-4 py-2 text-sm text-gray-700 hover:text-secondary hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:block">
              <NavLink href="/signin">Sign in</NavLink>
            </div>
          )}
          {auth ? null : (
            <Button href="/register" className="bg-secondary rounded-sm">
              <span className="text-bgcolor hover:text-white text-md">Try for free</span>
            </Button>
          )}
          <div className="-mr-1 lg:hidden">
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </Container>
  </header>
  );
};

export default Header;
