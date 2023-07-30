import {getAllPosts} from "../../helpers/post-util"
import PostContainer from "../components/PostContainer"
import Head from "next/head"
const PostsPage = ({posts}) => {
  return (
    <div className="mx-auto max-w-screen-lg mt-10 min-h-screen">
       <Head>
        <title>All Posts</title>

      </Head>
      <h1 className="text-4xl my-4 text-center text-white font-bold">
        All Posts
      </h1>
      <div className="flex justify-center flex-wrap items-center gap-4">
        {posts.map((post) => {
          return <PostContainer key={post.slug} post={post} />
        })}
      </div>
    </div>
  )
}
import fs from "fs"
import path from "path"
export function getStaticProps() {
  const postsPath = path.join(process.cwd(), "posts")
  const allPosts = getAllPosts(path, postsPath, fs)
  return {
    props: {
      posts: allPosts,
    },
  }
}
export default PostsPage
