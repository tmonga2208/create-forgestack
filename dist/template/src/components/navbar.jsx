"use client";
import LoginModal from './login-popover';
import { useUser } from '../context/usercontext';
import ProfileDropdown from './profile-dropdown';
export default function Navbar() {
    const { user } = useUser();
    return (<div>
        <nav className="flex justify-between items-center p-4">
            <div>
            <h1 className="text-2xl font-bold">ForgeStack</h1>
            </div>
            <div>
          {!user ? (<div>
              <LoginModal />
            </div>) : (<div>
                <ProfileDropdown />
            </div>)}
            </div>
        </nav>
    </div>);
}
