'use client'
import Link from 'next/link';

// import { Logo } from './Logo';
import { NavLink } from '../components/NavLink';
import { FaHandsHelping } from 'react-icons/fa';
import { useState ,Fragment} from 'react';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Container } from '../components/Container';

type Submenu = {
  href: string;
  label: string;
  description?: string;
  header?:string;
};
const AccordionNavLink = ({ href, children,submenus }: { href: string; children: React.ReactNode,submenus:Submenu[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between cursor-pointer px-6" onClick={toggleAccordion}>
      <span className="block w-full p-2 text-secondary text-md font-body opacity-80 font-medium pl-2">
          {children}
        </span>
        <svg
          className={`w-6 h-6 transition-transform text-secondary ${isOpen ? 'transform rotate-90' : ''}`}
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
          <div className="pl-4 ">
            {submenus.map((submenu) => (
              <div key={submenu.href} className="mb-2">
                <Link href={submenu.href} className="block pl-0 text-secondary font-medium opacity-60 text-sm">
                  {submenu.label}
                </Link>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};
export default function Footer() {
  return (
    <footer className="border-t bg-primary mt-4">
      <div className='hidden lg:block'>
      <Container>
        <div className="pb-16">
            {/* <FaHandsHelping /> */}
          <nav className="mt-10  mx-auto w-full px-12" aria-label="quick links">
           <div className='flex flex-row w-full '>
           <div className='flex flex-col w-1/4'>
              <h1 className='text-secondary text-lg font-body opacity-80 font-medium pl-2'>Pricing</h1>
              <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Starting at just $30 per month</span></NavLink>
              <div className='flex flex-col mt-5'>
              <h1 className='text-secondary font-body opacity-80 font-medium pl-2 text-lg'>Features</h1>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Patient Enagagement</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Continuity of Care</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Calendar</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Insights and Reporting</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Tele Consultation</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>E-prescribing</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Security</span></NavLink>

            </div>
            </div>
            <div className='flex flex-col w-1/4'>
            <h1 className='text-secondary font-body opacity-80 font-medium pl-2 text-lg'>Company</h1>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>About</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Careers-we are hiring!</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Press</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>News</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Contact</span></NavLink>
            <div className='flex flex-col mt-5'>
            <h1 className='text-secondary font-body opacity-80 font-medium pl-2 text-lg'>Solutions</h1>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>For Solo Practices</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>For Small Practices</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>For Medium Practices</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>For Large Practices</span></NavLink>

            </div>
            </div>
            <div className='flex flex-col w-1/4'>
            <h1 className='text-secondary font-body opacity-80 font-medium pl-2 text-lg'>Resources</h1>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Blog</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Togthr University</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Customer Stories</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Compare</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>FAQS</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Help Center</span></NavLink>
            <div className='flex flex-col mt-5'>
            <h1 className='text-secondary font-body opacity-80 font-medium pl-2 text-lg'>Built for you</h1>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Starting a Healthcare startup</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Starting a solo practice</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Switching to togthr</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>why togthr</span></NavLink>

            </div>
            </div>
            <div className='flex flex-col w-1/4'>
            <h1 className='text-secondary font-body opacity-80 font-medium pl-2 text-lg'>Get Started</h1>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Start your free trial</span></NavLink>
            <NavLink href='#'><span className='font-body text-secondary opacity-70 text-md'>Contact sales-(9739752752)</span></NavLink>
           
            </div>
           </div>

          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://twitter.com"
              className="group"
              aria-label="TaxPal on Twitter"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
            </Link>
            <Link
              href="https://github.com"
              className="group"
              aria-label="TaxPal on GitHub"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            &copy; {new Date().getFullYear()} Togthr. All rights reserved.
          </p>
        </div>
      </Container>
      </div>
      <div className='block lg:hidden relative'>
              <div className='flex flex-col pl-6'>
              <h1 className='text-secondary text-md font-body opacity-80 font-medium pl-2'>Pricing</h1>
              <NavLink href='#'><span className='font-body text-secondary opacity-70 text-sm'>Starting at just $30 per month</span></NavLink>
              </div>
              <div className="flex flex-col mt-5">
              <AccordionNavLink href="#features" 
                submenus={[
                  {href:'#',label:'Patient Enagagement'},
                  {href:'#',label:'Continuity of Care'},
                  {href:'#',label:'Calendar'},
                  {href:'#',label:'Insights and Reporting'},
                  {href:'#',label:'Tele Consultation'},
                  {href:'#',label:'E-prescribing'},
                  {href:'#',label:'Security'},]}>
                  Features
                </AccordionNavLink>
                <AccordionNavLink href="#pricing"
                  submenus={[
                { href:'#',label:'About'},
                { href:'#',label:`Careers-we're hiring!`},
                { href:'#',label:'Press'},
                { href:'#',label:'News'},
                { href:'#',label:'Contact'},
                ]}>
                  Company</AccordionNavLink>
                <AccordionNavLink href="#pricing" 
                submenus={[
                { href:'#',label:'For Solo Practices'},
                { href:'#',label:'For Small Practices'},
                { href:'#',label:'For Medium Practices'},
                { href:'#',label:'For Large Practices'},
                ]}>
                  Solutions
                </AccordionNavLink>
                <AccordionNavLink href="#pricing" 
                submenus={[
                  { href:'#',label:'Blog'},
                  { href:'#',label:'Togthr University'},
                  { href:'#',label:'Customer Stories'},
                  { href:'#',label:'Compare'},
                  { href:'#',label:'FAQS'},
                  { href:'#',label:'Help Center'},
                ]}>
                  Resources
                </AccordionNavLink>
                <AccordionNavLink href="#pricing" 
                submenus={[
                { href:'#',label:'Starting a Healthcare startup'},
                { href:'#',label:'Starting a solo practice'},
                { href:'#',label:'Switching to togthr'},
                { href:'#',label:'why togthr'},  
                ]}>
                  Built For You
                </AccordionNavLink>
                <AccordionNavLink href="#pricing" 
                submenus={[
                {href:'#',label:'Start your free trial'},
                {href:'#',label:'Contact sales-(9739752752)'},
                ]}>
                  Get Started
                </AccordionNavLink>
          </div>
          <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://twitter.com"
              className="group"
              aria-label="TaxPal on Twitter"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
            </Link>
            <Link
              href="https://github.com"
              className="group"
              aria-label="TaxPal on GitHub"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            &copy; {new Date().getFullYear()} Togthr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

