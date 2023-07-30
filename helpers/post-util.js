import matter from "gray-matter"
export function getAllPosts(path, postsPath, fs) {
  const postFiles = fs.readdirSync(postsPath)
  const postsData = postFiles.map((fileName) => {
    return getPostData(path, fileName, postsPath, fs)
  })
  const sortedPostData = postsData.sort((postA, postB) =>
    postB.date > postA.date ? -1 : 1
  )
  return sortedPostData
}
export function getPostData(path, fileName, postsPath, fs) {
  const filepath = path.join(postsPath, fileName)
  const postData = fs.readFileSync(filepath)
  const {data, content} = matter(postData)
  const updateFileName = fileName.replace(".md", "")
  const post = {
    slug: updateFileName,
    ...data,
    content,
  }
  return post
}
export function getFeaturedPosts(path, postsPath, fs) {
  const allPosts = getAllPosts(path, postsPath, fs)
  const featuredPosts = allPosts.filter((post) => post.isFeatured)
  return featuredPosts
}

export function filesNames(path, fs) {
  const filespath = path.join(process.cwd(), "posts")
  const fileNames = fs.readdirSync(filespath)
  const updateFileNames = fileNames.map((fileName) =>
    fileName.replace(".md", "")
  )
  return updateFileNames
}
