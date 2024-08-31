// "use client";
import Link from 'next/link';

const navList = [
  { name: 'Home', href: '/' },
  { name: 'Post', href: '/Post' },
];

export default function Header() {
  return (
    <header className='header'>
      <Link href='/'>
        <h1>Blog</h1>
      </Link>
      <nav className='header-nav'>
        <button className='theme'>
          <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
            <g fill='currentColor'>
              <path d='M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z'></path>
              <path
                fill-rule='evenodd'
                d='M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM3.669 3.716a.75.75 0 0 1 1.06-.047L6.95 5.7a.75.75 0 1 1-1.012 1.107L3.716 4.776a.75.75 0 0 1-.047-1.06Zm16.662 0a.75.75 0 0 1-.047 1.06l-2.222 2.031A.75.75 0 0 1 17.05 5.7l2.222-2.031a.75.75 0 0 1 1.06.047ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm-2.224 5.025a.75.75 0 0 1 1.06 0l2.222 2.223a.75.75 0 0 1-1.06 1.06l-2.223-2.222a.75.75 0 0 1 0-1.06Zm-10.051 0a.75.75 0 0 1 0 1.061l-2.223 2.222a.75.75 0 0 1-1.06-1.06l2.222-2.223a.75.75 0 0 1 1.06 0ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z'
                clip-rule='evenodd'
              ></path>
            </g>
          </svg>
        </button>
        <Link className='header-nav-link' href='/about'>
          about
        </Link>
      </nav>
    </header>
  );
}
