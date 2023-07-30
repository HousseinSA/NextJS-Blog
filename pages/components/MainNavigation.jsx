import Link from "next/link"
const MainNavigation = () => {
  return (
    <div className="flex w-full  items-center py-5 px-20 bg-slate-900 justify-between">
      <header className="text-white text-2xl font-bold">
        <Link href={"/"}>Hue NextBlog</Link>
      </header>
      <nav className="flex items-center gap-3">
        <Link
          href={"/contact"}
          className="text-white text-lg hover:text-slate-300">
          Contact
        </Link>
        <Link
          href={"/posts"}
          className="text-white text-lg hover:text-slate-300">
          Posts
        </Link>
      </nav>
    </div>
  )
}

export default MainNavigation
