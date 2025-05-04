import Image from "next/image";
import localFont from "next/font/local";
import Link from 'next/link';


const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900"
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-2xl font-bold ${poppins.className}`}>
            The best Url Shortener in the Market
          </p>
          <p className="px-16 text-center justify-items-normal">
            We are the most straightforward and easy to use URL shortener in the world.<br/>
            Most of the URL shorteners are very complicated and hard to use.
            They track your URLs and require you to create an account.
            We are friendly and easy to use unlike them.
          </p>
          <li className='flex gap-3 justify-start'>
              <Link href="/shorten"><button className = "bg-purple-500 text-white text-center font-bold shadow-lg p-3 rounded-lg py-1">Try Now</button></Link>
              <Link href="/github"><button className = "bg-purple-500 text-white text-center font-bold shadow-lg p-3 rounded-lg py-1">GitHub</button></Link>   
          </li>  
        </div>
        <div className="justify-start relative">
          <Image className="mix-blend-darken" alt= "Image of an Vector" src={"/images/vector.jpg"} fill={true} />
        </div>
      </section>
      
    </main>
  );
}
