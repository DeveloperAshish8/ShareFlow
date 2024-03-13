import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="my-12 flex md:flex-row flex-col max-w-[1400px] md:mx-auto justify-between md:p-7 px-[10px]">
      <div className="max-w-xl lg:max-w-3xl w-[90%]">
        <Link className="text-primary flex md:ml-[28%]" href="#">
          <span className="sr-only">Home</span>
          <Image src="/logo.svg" width={50} height={50} alt="logo" />
        </Link>

        <h1 className="mt-6 text-2xl mb-4 font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Welcome to ShareFlow 🦑
        </h1>

        <SignIn className="w-[90%]" />
      </div>

      <div className="lg:mt-14 md:my-auto md:block hidden">
        <Image alt="Login Image" src="/Login.png" width={500} height={500} />
      </div>
    </section>
  );
}
