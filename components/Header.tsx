import CardIcon from "./CardIcon";
import Container from "./Container";
import FavoriteButton from "./FavoriteButton";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import SingIn from "./SingIn";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import { Logs } from "lucide-react";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import { getMyOrders } from "@/sanity/queries";

const Header = async () => {
  const user = await currentUser();
  const { userId } = await auth();
  console.log(user, "user");
  let orders = null;
  if (userId) {
    orders = await getMyOrders(userId);
  }
  return (
    <header className="bg-indigo-600/90 py-5 border-b border-b-black/20 backdrop-blur-md top-0 sticky z-50  justify-center">
      <Container className="flex items-center justify-between">
        <div className="w-auto md:w-1/4 flex items-center gap-5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <div className="flex-1 flex justify-center whitespace-nowrap">
          <HeaderMenu />
        </div>

        <div className="w-auto md:w-1/4 flex item-center justify-end gap-5">
          <SearchBar />
          <CardIcon />
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <Link
                href={"/orders"}
                className="group relative hover:text-pink-300 hoverEffect text-white"
              >
                <Logs />
                <span className="absolute -top-1 -right-1 bg-darkRed text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                  {orders?.length ? orders?.length : 0}
                </span>
              </Link>
              <UserButton />
            </SignedIn>
            {/* ถ้ายังไม่มีการlog in user is null or false ให้เรียกใช้ <SingIn />*/}
            {!user && <SingIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};
export default Header;
