import Image from "next/image"
import Link from "next/link"
const PostContainer = ({post}) => {
  const imagePath = "/images/posts"
  if (post) {
    return (
      <div className="bg-slate-500 max-w-xs aspect-w-2 aspect-h-2  flex items-center justify-center text-white rounded shadow-md py-4 px-2 ">
        <Link href={`/posts/${post.slug}`}>
          <div>
            <Image
              src={`${imagePath}/${post.image}`}
              width={300}
              alt={post.title}
              height={200}
              className="mx-auto"
            />
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-bold text-center my-2">
              {post.title}
            </h3>
            <p className="text-center text-slate-700">{post.date}</p>
            <p className="p-2">{post.excerpt}</p>
          </div>
        </Link>
      </div>
    )
  }
}

export default PostContainer
