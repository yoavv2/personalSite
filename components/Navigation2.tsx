import Link from 'next/link';
import Rive from 'rive-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ThemeSwitch from './ThemeSwitch';
import { Home, Projects, Github, LinkedIn, Mail } from './Icons';
import MotionListItem from './MotionListItem';

function Navigation2() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <ul className='relative flex space-x-2 ' aria-label='navigation'>
      <MotionListItem className='flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'>
        <span className='p-5'>
          <ThemeSwitch />
        </span>
      </MotionListItem>
      <hr className='h-11 w-1 rounded-lg bg-gray-400 dark:bg-gray-200' />
      {/* <label className='absolute bottom-full flex cursor-pointer items-center'>
          {' '}
          Home{' '}
        </label> */}
      <MotionListItem className='relative flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'>
        <Link href='/'>
          <a
            className='relative flex flex-col items-center justify-center p-5 text-center'
            aria-label='home'
          >
            <Home />
            <span className='mt-1 text-[.5em]'>Home</span>
          </a>
        </Link>

        {pathname === '/' && (
          <motion.div
            className='absolute top-full right-0 left-0 h-1 rounded-full bg-gray-600 underline dark:bg-gray-100'
            layoutId='underline'
          />
        )}
      </MotionListItem>

      <MotionListItem className='relative flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'>
        <Link href='/blog'>
          <a
            className='relative flex flex-col items-center justify-start text-center'
            aria-label='blog'
          >
            {/* mt-1 text-[.5em] */}
            <Rive src='/rive/blog2.riv' className='mb-5 w-24' />
            <span className=' absolute top-[90px] text-[.5em]'>Blog</span>
          </a>
        </Link>
        {pathname === '/blog' && (
          <motion.div
            className='absolute top-full right-0 left-0 h-1 rounded-full bg-gray-600 underline dark:bg-gray-100 '
            layoutId='underline'
          />
        )}
      </MotionListItem>

      <MotionListItem className='relative flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'>
        <Link href='/projects'>
          <a
            className='relative flex flex-col items-center justify-center p-5 text-center'
            aria-label='projects'
          >
            <Projects />
            <span className='mt-1 text-[.5em]'>Projects</span>
          </a>
        </Link>
        {pathname === '/projects' && (
          <motion.div
            className='absolute top-full right-0 left-0 h-1 rounded-full bg-gray-600 underline dark:bg-gray-100 '
            layoutId='underline'
          />
        )}
      </MotionListItem>

      <hr className='h-11 w-1 rounded-lg bg-gray-400 dark:bg-gray-200' />

      <MotionListItem className='flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'>
        <Link href='mailto:yoavhevroni1@gmail.com'>
          <a
            className='relative flex flex-col items-center justify-center p-5 text-center'
            target='_blank'
            aria-label='mail'
          >
            <Mail />
            <span className='mt-1 text-[.5em]'>Mail</span>
          </a>
        </Link>
      </MotionListItem>
      <MotionListItem className='flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'>
        <Link href='https://github.com/yoavv2'>
          <a
            className='relative flex flex-col items-center justify-center p-5 text-center'
            target='_blank'
            aria-label='github'
          >
            <Github />
            <span className='mt-1 text-[.5em]'>Github</span>
          </a>
        </Link>
      </MotionListItem>
      <MotionListItem className='flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'>
        <Link href='https://www.linkedin.com/in/yoavhevroni/'>
          <a
            className='relative flex flex-col items-center justify-center p-5 text-center'
            target='_blank'
            aria-label='linkedin'
          >
            <LinkedIn />
            <span className='mt-1 text-[.5em]'>LinkedIn</span>
          </a>
        </Link>
      </MotionListItem>
    </ul>
  );
}

export default Navigation2;
