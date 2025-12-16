import NoAccess from "@/components/NoAccess";
import WishListProducts from "@/components/WishListProducts";
import { currentUser } from "@clerk/nextjs/server";

const WishListPage = async () => {
  const user = await currentUser();
  return (
    <>
      {user ? (
        <WishListProducts />
      ) : (
        <NoAccess details="เข้าสู่ระบบเพื่อดูสินค้าที่คุณอยากได้" />
      )}
    </>
  );
};

export default WishListPage;
