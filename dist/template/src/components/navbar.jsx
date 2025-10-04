"use client";
import LoginModal from './login-popover';
import { useUser } from '../context/usercontext';
import ProfileDropdown from './profile-dropdown';
import Image from 'next/image';
export default function Navbar() {
    const { user } = useUser();
    return (<div>
        <nav className="flex justify-between items-center p-4">
        <div className='flex items-center justify-center gap-2'>
          <Image src="/logo.png" width={40} height={40} alt='logo'/>
            <h1 className="text-2xl font-bold">ForgeStack</h1>
            </div>
            <div>
          {!user ? (<div>
              <LoginModal />
            </div>) : (<div>
                <ProfileDropdown photoURL={user?.photoURL || ''} displayName={user?.displayName || ''} email={user?.email || ''}/>
            </div>)}
            </div>
        </nav>
    </div>);
}
