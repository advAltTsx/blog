import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="h-auto p-6 md:px-[20vw] lg:px-[20vw] w-full  bg-gradient-to-b from-transparent to-black">
      <div className="h-auto py-12 w-full flex ">
        <div className="h-full w-1/2 flex flex-col">
          <div className="h-1/2 w-full space-x-4">
            <h1 className="py-6 text-2xl font-extrabold text-white ">
              Quick links <br />
              <Link href={'https://abhyudaya.xyz'}>
                {' '}
                <span className=" font-semibold text-sm text-white/70 /70">
                  Home
                </span>
              </Link>
            </h1>
          </div>
          <div className="h-1/2 w-full">
            <h1 className=" text-2xl py-6 font-extrabold text-white ">
              Products <br />
              <Link href={'https://advnote.abhyudaya.xyz'}>
                {' '}
                <span className=" font-semibold text-sm text-white/70 /70">
                  ADVNote
                </span>
              </Link>{' '}
              <br />
              <Link href={'https://search.abhyudaya.xyz'}>
                {' '}
                <span className=" font-semibold text-sm text-white/70 /70">
                  ADVSearch
                </span>
              </Link>
            </h1>
          </div>
        </div>
        <div className="h-full w-1/2 lg:flex lg:flex-col lg:justify-end">
          <h1 className="py-6 text-2xl font-extrabold text-white ">
            Socials <br />
            <Link href={'https://instagram.com/advwastaken'}>
              {' '}
              <span className=" font-semibold text-sm text-white/70 /70">
                Instagram
              </span>
            </Link>
          </h1>
        </div>
      </div>
      <div className="h-auto w-full flex items-center justify-center text-center">
        <p className={`text-white text-sm font-bold /90 font-sans`}>
          {' '}
          ©Abhyudaya 2024
        </p>
      </div>
    </footer>
  );
}
