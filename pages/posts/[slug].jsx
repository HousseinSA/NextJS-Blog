import PostsContent from "../components/PostsContent"
import {filesNames, getAllPosts} from "../../helpers/post-util"
import Head from "next/head"
const PostDetailsPage = ({postDetails}) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>{postDetails.title}</title>
        <meta name="discreption" content={postDetails.excerpt} />
      </Head>
      <PostsContent post={postDetails} />
    </div>
  )
}
import fs from "fs"
import path from "path"
export function getStaticProps(context) {
  const postsPath = path.join(process.cwd(), "posts")
  const {slug} = context.params
  const allPosts = getAllPosts(path, postsPath, fs)
  const postContent = allPosts.find((post) => post.slug === slug)
  return {
    props: {
      postDetails: postContent,
    },
    revalidate: 1800,
  }
}
export function getStaticPaths() {
  const slugNames = filesNames(path, fs)
  const fileNamesSlugs = slugNames.map((name) => ({
    params: {
      slug: name,
    },
  }))
  return {
    paths: fileNamesSlugs,
    fallback: false,
  }
}
export default PostDetailsPage
