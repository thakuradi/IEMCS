import Navbar from '@/components/Navbar';
import { ImagesSliderDemo} from '@/components/Hero';
import Services from '@/components/Services';

import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
     <ImagesSliderDemo></ImagesSliderDemo>
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
