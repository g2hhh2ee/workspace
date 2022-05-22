import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { useRouter } from "next/router";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  // loading 같은 거 띄워주려면 session이랑 status 이런 거 넣어주면 됨.
  const { data: session } = useSession();
  // console.log(session);
  const [open, setOpen] = useRecoilState(modalState);
  // const open = useRecoilValue(modalState);
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm ">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        {/* Left */}
        <div
          className="relative hidden w-24 cursor-pointer lg:inline-grid"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_monochrome_variant_Logo_2016.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle - Search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black  focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />

          {/* session이 있을 경우에만 보여줄 것임! show these stuff only if there's a session */}
          {session ? (
            <>
              <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                className="navBtn"
                onClick={() => setOpen(true)}
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                // src="https://avatars.githubusercontent.com/u/57996351?s=96&v=4"
                src={session?.user?.image}
                alt="pfp"
                className="h-10 w-10 cursor-pointer rounded-full"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
