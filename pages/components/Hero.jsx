import Image from "next/image"
import image from "../../public/images/IMG_20230225_231859.jpg"
const HeroPage = () => {
  return (
    <section className="bg-slate-900 p-20">

      <div className=" flex justify-center">
        <Image
          src={image}
          alt="Hue Face"
          priority
          width={200}
          height={200}
          className="rounded-full my-4 w-48 h-48"
        />
      </div>
      <div className="text-white">
        <h1 className="text-4xl text-center font-bold my-4">Hi, I'm Hue</h1>
        <p className="text-center">
          I blog about web development-especially Frontend framework like react
          and angluar
        </p>
      </div>
    </section>
  )
}
export default HeroPage
