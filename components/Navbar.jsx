import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Logout from "./auth/Logout";

const Navbar = async ({ sidebar }) => {
    const session = await auth()
  return (
    <nav>
      <Link href="/">
        <Image src="/logo.png" alt="Stay Swift Logo" width={100} height={100} />
      </Link>

      {sidebar && (
        <ul>
          <li>
            <Link href="/hotels">All Hotels</Link>
          </li>

          <li>
            <Link href="/about">About Us</Link>
          </li>

          <li>
            <Link href="/contact">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            {
              session?.user ? (
                <>
                  <span className="mx-1">{session?.user?.name}</span>
                  <span className="mx-1">|</span>
                  <Logout/>
                </>
              ) : (
                <Link href="/login" className="login">
              Login
            </Link>
              )
            }
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
