import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className='py-5 md:py-10'>
        <div className="container">
          <div className="bg-lime-700  bg-opacity-75 text-gray-800 p-10 rounded-sm h-[50vh] w-2/3 ml-auto relative">
            <div className="absolute left-[-25%] top-0 w-1/2 h-full flex flex-col justify-center">
            <p className='text-xl'>LOREM IPSUM DOLOR SIT</p>
            <p className="text-3xl font-light">Lorem ipsum dolor sit amet.</p>
            <Link href={'/shop'} className="px-6 py-2 bg-lime-950 text-white self-end rounded-sm">Shop</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 md:py-10"></section>
    </main>
  )
}
