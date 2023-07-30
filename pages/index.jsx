import FeaturedPosts from "./components/Feautred-Posts"
import HeroPage from "./components/Hero"
import Head from "next/head"
import {getFeaturedPosts} from "../helpers/post-util"
const HomePage = ({posts}) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Hue's blog</title>
        <meta name="discreption" content="i blog post about programming and web development" />
      </Head>
      <HeroPage />
      <FeaturedPosts posts={posts} />
    </div>
  )
}
import fs from "fs"
import path from "path"
export function getStaticProps() {
  const postsPath = path.join(process.cwd(), "posts")
  const feautredPosts = getFeaturedPosts(path, postsPath, fs)
  return {
    props: {
      posts: feautredPosts,
    },
    revalidate: 1800,
  }
}

export default HomePage
