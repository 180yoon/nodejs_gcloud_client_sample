import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen'>
        <div className='fixed h-full w-full p-20'>
            <img className = 'object-contain h-full w-full' src="../404.png">

            </img>
            </div>
            <div className='top-0 fixed w-full'>
                <h1 className='top-0 text-textcolor text-center text-[3.1rem]'><a href="/">wrong turn</a></h1>
                </div>
                <div className='fixed w-full bottom-0'>
                    <h1 className='object-center text-textcolor text-center text-[3.1rem] text-nowrap'><a href='/'>take me home</a></h1>
                    </div>
                    </div>
                    )
                }