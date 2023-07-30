import PostContainer from "./PostContainer"

const FeaturedPosts = ({posts}) => {
  return (
    <div className="px-6 py-4 bg-slate-900">
      <div className="flex items-center justify-center flex-wrap gap-3 max-w-screen-xl mx-auto">
        {posts&&posts.map((post) => {
          return <PostContainer key={post.slug} post={post} />
        })}
      </div>
    </div>
  )
}

export default FeaturedPosts
