import React from 'react';
import Products from './Products ';
import ScrollStorySection from '../Animation/ScrollStorySection';
import TextMotionExample from '../Animation/TextMotionExample';
import ScrollText from '../Animation/ScrollText ';
import { AuroraText } from '../SeraUi/AuroraText ';
import Banner from './Banner';
import WelcomeBanner from './WelcomeBanner ';
import SparkleButton from './SparkleButton';

const Home = () => {
       return (
              <div>
                     <h2 className='text-2xl mt-28 mb-60'>Lorem ipsum dolor sit amet consectetur, adiaccusantium corrupti et odio id, vitae, officiis exercitationem. Amet eius pariatur exercitao. Temnt ullam impedit commodi id fuga excepturi? Exercitationem deserunt iste cumque libero voluptatum ut fugiat velit! Magnam vel eveniet obcaecati ut. Nostrum, fugit laudantium unde ullam aliquam voluptatum dolore iusto maiores atque animi. Ipsam eum non quis laboriosam tempore hic asperiores possimus nulla doloribus veritatis labore minima aspernatur cumque, esse harum, blanditiis recusandae ea facere odio fugiat pariatur adipisci repudiandae! Quos doloribus possimus, minus quae sapiente vitae eligendi, reprehenderit corporis quam alias laboriosam non illum illo error vero aperiam autem in officia!</h2>
                     <WelcomeBanner/>
                     <SparkleButton/>
                     <Products/>
                     <Banner/>
                     <ScrollStorySection/>
                     <TextMotionExample/>
                     <ScrollText/>
              </div>
       );
};

export default Home;