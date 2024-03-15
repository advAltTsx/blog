import { Post } from 'contentlayer/generated';
import Image from 'next/image';
// ^ You're probably going to get an error, but we'll fix it later
import Link from 'next/link';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from './ui/glowing-stars';

export default function PostCard(post: Post) {
  return (
    <div className="my-4 border-none">
      {/* <div className=" w-full h-auto p-6 shadow-xl rounded-xl flex">
        <div className="h-44 w-1/3 flex justify-center items-center">
          <Image
            src={post.imageUrl}
            width={100}
            height={100}
            alt={''}
            className="w-full h-auto"
          />
        </div>
        <div className="h-44 w-2/3 flex flex-col justify-center items-start px-6">
          <button></button>
          <h2 className="mb-1 text-xl">
            <Link
              href={post.url}
              className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
            >
              {post.title}
            </Link>
          </h2>

          <h2 className="text-base mb-1">by {post.author}</h2>
          <time
            dateTime={post.date}
            className="mb-1 block text-xs text-gray-600"
          >
            {new Intl.DateTimeFormat('en-US').format(new Date(post.date))}
          </time>
        </div>
      </div> */}
      <div className="flex py-8 items-center justify-center antialiased">
        <GlowingStarsBackgroundCard className="bg-black py-4">
          <Link href={post.url}>
            <GlowingStarsTitle>{post.title}</GlowingStarsTitle>
            <div className="flex w-full justify-between items-end">
              <GlowingStarsDescription>
                <time dateTime={post.date} className="mb-1 block text-xs">
                  {new Intl.DateTimeFormat('en-US').format(new Date(post.date))}
                </time>{' '}
              </GlowingStarsDescription>
              <GlowingStarsDescription>
                by {post.author}
              </GlowingStarsDescription>
              <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                <Icon />
              </div>
            </div>
          </Link>
        </GlowingStarsBackgroundCard>
      </div>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
