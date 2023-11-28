import Link from 'next/link'

const NavBar = () => {

  return (
    <main>
    <header className=' font-mono text-right overflow-x-hidden flex align-middle justify-center translate-y-[-1rem] '>
     
          <nav className=' flex items-end justify-end mt-[3rem] '>
          <div className='  hover:text-gray-500 active:text-gray-800'>
            <Link href="./" className='mr-6  hover:text-gray-500 active:text-gray-800'>Home</Link>
        </div>
        <div className='mr-6 hover:text-gray-500 active:text-gray-800'>
            <Link href="./about">About</Link>
        </div>
        <div className='mr-6 hover:text-gray-500 active:text-gray-800' id="hit">
            <Link href="./contact" className=''>Contact</Link>
        </div>
        <div className='mr-1 hover:text-gray-500 active:text-gray-800 '>
        <Link href="./blog">Blog</Link>
        </div>
        </nav>
        </header>
    </main>
  )
}

export default NavBar