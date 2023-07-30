import Link from "next/link";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from "next/image";
import '@splidejs/react-splide/css';

export default function Home() {
  return (
    <main>
      <section className='py-5'>
        <div className="container">
          <div className="bg-lime-700  bg-opacity-75 text-gray-800 p-10 rounded-sm h-[50vh] w-2/3 ml-auto relative">
            <div className="absolute left-[-25%] top-0 w-1/2 h-full flex flex-col justify-center">
            <p className='text-xl'>LOREM IPSUM DOLOR SIT</p>
            <p className="text-3xl font-light">Lorem ipsum dolor sit amet.</p>
            <Link href={'https://www.shopier.com/ShowProductNew/storefront.php?shop=betzceramic&sid=VVdyZEVma1BkTE1UOGoyQjBfLTFfIF8g'} target="_blank" className="px-6 py-2 bg-lime-950 text-white self-end rounded-sm">Shop</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 md:py-10 relative overflow-hidden bg-amber-800 lg:bg-transparent">
        <div className="flex justify-between text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl drop-shadow-xl text-white font-bold">
          <span className="inline-flex">S</span>
          <span className="inline-flex">T</span>
          <span className="inline-flex">O</span>
          <span className="inline-flex">N</span>
          <span className="inline-flex">E</span>
          <span className="inline-flex">W</span>
          <span className="inline-flex">A</span>
          <span className="inline-flex">R</span>
          <span className="inline-flex">E</span>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="hidden md:block">
            <div className="flex -ml-4 lg:-ml-8 items-center">
              <div className="w-1/2 pl-4 lg:pl-8">
                <Splide hasTrack={false}
                options={{
                  arrows: false,
                  pagination:false,
                  type: 'fade',
                  rewind: true,
                  autoplay: true,
                  interval: 4000
                }}
                className="rounded-sm overflow-hidden"
                >
                  <SplideTrack>
                  <SplideSlide className="w-full aspect-video">
                    <Image
                    alt="Stoneware 1"
                    src={'https://images.unsplash.com/photo-1525973779373-015bdf68e579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'}
                    layout="fill"
                    />
                  </SplideSlide>
                  <SplideSlide className="w-full aspect-video">
                    <Image
                    alt="Stoneware 2"
                    src={'https://images.unsplash.com/photo-1556205801-a0bf81cdc90d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
                    layout="fill"
                    />
                    </SplideSlide>
                  <SplideSlide className="w-full aspect-video">
                    <Image
                    alt="Stoneware 3"
                    src={'https://images.unsplash.com/photo-1518548981607-b068130027d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80'}
                    blurDataURL={'https://images.unsplash.com/photo-1518548981607-b068130027d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80'}
                    layout="fill"
                    />
                  </SplideSlide>
                  </SplideTrack>
                </Splide>
              </div>
              <div className="w-1/2 pl-4 lg:pl-8">
                <h2 className="text-4xl mb-4">Experience from nature</h2>
                <div className="font-light text-sm">
                  <p>Each product has its own story.</p>
                  <p>Discover the characteristics while enjoying the experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
