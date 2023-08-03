import Link from "next/link";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import '@splidejs/react-splide/css';
import { GetStaticProps } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type ContentProps = {
  title: string,
  subTitle: string,
  firstLineHeading: string,
  secondLineHeading: string,
  sliderItems: Array<{imageUrl: string, name: string}>,
  sliderTitle: string,
  sliderText: string
}

export default function Home({content} : {content: ContentProps}) {
  return (
    <main>
      <section className='py-5'>
        <div className="container">
          <div className="bg-lime-700  bg-opacity-75 text-gray-800 p-10 rounded-sm h-[50vh] w-2/3 ml-auto relative">
            <div className="absolute left-[-25%] top-0 w-1/2 h-full flex flex-col justify-center">
            <p className='text-xl'>L{content.title}</p>
            <p className="text-3xl font-light">{content.subTitle}</p>
            <Link href={'https://www.shopier.com/ShowProductNew/storefront.php?shop=betzceramic&sid=VVdyZEVma1BkTE1UOGoyQjBfLTFfIF8g'} target="_blank" className="px-6 py-2 bg-lime-950 text-white self-end rounded-sm">Shop</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 md:py-10 relative overflow-hidden">
        <div className="flex justify-between text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl drop-shadow-xl text-white font-bold">
          {
            content.firstLineHeading.split('').map((word, index) => (
              <span className="inline-flex" key={index}>{word}</span>
            ))
          }
        </div>
      </section>
      <section className="py-10">
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
                    {
                      content.sliderItems.map((item) => (
                    <SplideSlide className="w-full aspect-[4/3]" key={item.name}>
                      <Image
                        alt={item.name}
                        src={item.imageUrl}
                        className="object-cover"
                        fill
                    />
                    </SplideSlide>
                        
                      ))
                    }
                  </SplideTrack>
                </Splide>
              </div>
              <div className="w-1/2 pl-4 lg:pl-8">
                <h2 className="text-4xl mb-4">{content.sliderTitle}</h2>
                <div className="font-light text-sm" dangerouslySetInnerHTML={{__html: content.sliderText}}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden">
        <div className="flex justify-between text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl drop-shadow-xl text-white font-bold">
          {
            content.secondLineHeading.split('').map((word) => (
              <span className="inline-flex" key={word}>{word}</span>
            ))
          }
        </div>
      </section>
      <section className="py-5 md:py-10">
        <div className="container">
          <div className="flex flex-wrap items-center -ml-4">
            <div className="w-full md:w-1/2 pl-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Are products handmade?</AccordionTrigger>
        <AccordionContent>
          Yes. They all born in hands.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>
          Yes. It shapes with your own ideas or wishes. Just tell us what you want to see.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Does it need any care?</AccordionTrigger>
        <AccordionContent>
          Depends on usage and product. You will see some info with your product to take care of it.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <div className="relative w-full aspect-square md:aspect-[4/3]">
                <Image
                  alt={content.sliderItems[0].name}
                  src={content.sliderItems[0].imageUrl}
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      content: {
        title: "LOREM IPSUM DOLOR SIT",
        subTitle: "Lorem ipsum dolor sit amet.",
        firstLineHeading: "STONEWARE",
        secondLineHeading: "HANDCRAFT",
        sliderItems: [
          {
            imageUrl: "https://images.unsplash.com/photo-1525973779373-015bdf68e579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
            name: "Stoneware 1"
          },
          {
            imageUrl: "https://images.unsplash.com/photo-1556205801-a0bf81cdc90d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            name: "Stoneware 2"
          },
          {
            imageUrl: "https://images.unsplash.com/photo-1518548981607-b068130027d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
            name: "Stoneware 3"
          }
        ],
        sliderTitle: "Experience from nature",
        sliderText: `<p>Each product has its own story.</p><p>Discover the characteristics while enjoying the experience.</p>`
      }
    }
  }
}
