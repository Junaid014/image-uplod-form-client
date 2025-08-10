import React from 'react';
import Products from './Products ';
import ScrollStorySection from '../Animation/ScrollStorySection';
import TextMotionExample from '../Animation/TextMotionExample';
import ScrollText from '../Animation/ScrollText ';
import { AuroraText } from '../SeraUi/AuroraText ';
import Banner from './Banner';
import WelcomeBanner from './WelcomeBanner ';
import SparkleButton from './SparkleButton';
import BannerAngle from './BannerAngle';
import BannerBackground from './BannerBackground ';
import Navbar from './Navbar/UnderLine';
import BlurNavbar from './Navbar/BlurNavbar ';

const Home = () => {
       return (
              <div>
                <Navbar/>
                <BlurNavbar/>
                     <h2 className='text-2xl mt-28 mb-60'>Lorem ipsum dolor sit amet consectetur, adiaccusantium corrupti et odio id, vitae, officiis exercitationem. Amet eius pariatur exercitao. Temnt ullam impedit commodi id fuga excepturi? Exercitationem deserunt iste cumque libero voluptatum ut fugiat velit! Magnam vel eveniet obcaecati ut. Nostrum, fugit laudantium unde ullam aliquam voluptatum dolore iusto maiores atque animi. Ipsam eum non quis laboriosam tempore hic asperiores possimus nulla doloribus veritatis labore minima aspernatur cumque, esse harum, blanditiis recusandae ea facere odio fugiat pariatur adipisci repudiandae! Quos doloribus possimus, minus quae sapiente vitae eligendi, reprehenderit corporis quam alias laboriosam non illum illo error vero aperiam autem in officia!</h2>
                     <WelcomeBanner />
                     <section>
                            
                     </section>
                     <BannerBackground>
                           <section className='pt-84'> 
                             <div
  className="p-[3px] rounded-xl bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-violet-500 animate-rainbow w-[600px] mx-auto"
>
  <div className="bg-[#9aa5b4] py-6 px-10 rounded-2xl flex">
    <div>
      <h1 className="text-[#ecf0f6] text-4xl font-bold roboto mb-14">Junaid Hosen</h1>
      <h3 className="roboto text-2xl">Frontend Developer</h3>
    </div>
  </div>

  <style>{`
    @keyframes rainbow {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }
    .animate-rainbow {
      background-size: 400% 400%;
      animation: rainbow 3s linear infinite;
    }
  `}</style>
</div>

                           </section>
                            {/* other banner content */}
                     </BannerBackground>
                     <BannerAngle />
                     <SparkleButton />
                     <Products />
                     <Banner />
                     <ScrollStorySection />
                     <TextMotionExample />
                     <ScrollText />
              </div>
       );
};

export default Home;