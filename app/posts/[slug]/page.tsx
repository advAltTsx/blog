import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import { TracingBeam } from '@/components/ui/tracing-beam';

import Link from 'next/link';
// ^ This component is just a placeholder, it will give you an error, remove it.

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post: any) => post._raw.flattenedPath === params.slug
  );
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="mx-auto overflow-y-hidden bg-black max-w-xl py-8 flex flex-col justify-center items-center">
      <div className="h-auto w-full p-6">
        <Link href={'/'}>
          <button className="text-blue-600 font-bold">Back to Posts</button>
        </Link>
      </div>
      <TracingBeam className="px-6">
        <div className="mb-8 text-center px-2">
          <time dateTime={post.date} className="mb-1 text-xs text-white/70">
            {new Intl.DateTimeFormat('en-US').format(new Date(post.date))}
          </time>
          <h1 className="text-3xl font-bold text-white">{post.title}</h1>
        </div>
        <div className=" h-auto w-full flex justify-center items-center">
          <Image
            alt={post.title}
            width={10}
            height={100}
            className="h-auto w-[40vw] rounded-xl shadow-2xl"
            src={post.imageUrl}
            unoptimized
          />
        </div>
        <div className="text-left my-8 px-8 text-white/50">
          <MDXContent components={mdxComponents} />
        </div>
        <div className="h-auto w-full py-3 flex items-center justify-center">
          <h1 className="text-xl font-lg text-white/90">
            by <span className=" font-bold"> {post.author} </span>
          </h1>
        </div>
      </TracingBeam>

      <div className="h-auto w-full pb-1 pt-8 flex items-center justify-center">
        <h1 className="text-sm font-lg text-white/80">{'©Abhyudaya 2024'}</h1>
      </div>
    </article>
  );
};

export default PostLayout;

export const generateStaticParams = async () =>
  allPosts.map((post: any) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post: any) => post._raw.flattenedPath === params.slug
  );
  if (!post) notFound();
  return { title: post.title };
};
