import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Image from 'next/image';

type IndexProps = {
  posts: PostType[];
};

const blog = ({ posts }: IndexProps): JSX.Element => {
  return (
    <>
      <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left'>
        Hi,
      </h1>
      <h2 className='font-mono'> Welcome to my blog</h2>
      <p className='font-mono'>
        here you can find things that i want to keep for myself
      </p>
      {posts.map((post) => (
        <article key={post?.slug} className='mt-12'>
          <p className='mb-1 text-sm text-gray-500 dark:text-gray-400'>
            {format(parseISO(post?.date), 'MMMM dd, yyyy')}
          </p>

          <Link as={`/posts/${post?.slug}`} href={`/posts/[slug]`}>
            <a
              className='text-gray-900 hover:cursor-pointer 
            dark:text-white '
            >
              <h1 className='mb-2 text-xl font-[Inter]'>{post.title}</h1>

              <p className='mb-3 leading-tight font-[Inter]'>
                {post?.description}
              </p>

              <img
                src={`/images/${post?.image}`}
                alt={post?.title}
                width={400}
                height={400}
              />
              <p>
                <a>Read More</a>
              </p>
            </a>
          </Link>
        </article>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title', 'image']);

  return {
    props: { posts },
  };
};

export default blog;