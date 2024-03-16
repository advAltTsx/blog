import { allPosts } from 'contentlayer/generated';
// ^ You're probably going to get an error, but we'll fix it later
import PostCard from '../../components/PostCard';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import Link from 'next/link';
import Footer from '@/components/footer';

export default function Home() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="h-auto min-h-screen bg-black bg-grid-small-white/[0.2] from-[#fff] to-transparent w-full">
      <div className="h-auto w-full p-12 bg-gradient-to-b from-black to-transparent ">
        <Link href={'https://abhyudaya.xyz'}>
          <button className="text-blue-600 font-bold">Back to Home</button>
        </Link>
      </div>
      <div className="mx-auto max-w-xl pb-44 pt-12 px-12">
        <h1 className="mb-24 text-left text-white text-5xl font-black">
          Blogs
        </h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
