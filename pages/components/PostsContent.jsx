import Image from "next/image"
import ReactMarkdown from "react-markdown"
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter"
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
const PostsContent = ({post}) => {
  SyntaxHighlighter.registerLanguage("js", js)
  function imageComponent(props) {
    const {src, alt} = props
    return <Image src={src} alt={alt} width={400} height={400} />
  }
  function codeBlock(props) {
    const {node} = props
    return (
      <div className="code">
        <SyntaxHighlighter
          language={"js"}
          style={atomDark}
          children={node.children[0].value}
        />
      </div>
    )
  }
  const customComponents = {
    img: imageComponent,
    code: codeBlock,
  }
  if (post) {
    const postPath = `/images/posts/${post.image}`
    return (
      <div className="max-w-screen-lg mx-auto bg-white m-4 p-4">
        <div className="flex justify-between items-center p-4 ">
          <h1 className="text-purple-500 text-6xl font-bold">{post.title}</h1>
          <div>
            <Image
              src={postPath}
              width={200}
              height={200}
              className="rounded"
            />
          </div>
        </div>
        <hr />
        <div className="markdownContainer prose">
          <ReactMarkdown components={customComponents}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    )
  }
}

export default PostsContent
