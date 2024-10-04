import Navbar from '@/components/Navbar';
import {Hero} from '@/components/Hero';
import Services from '@/components/Services';

import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
     <Hero/>
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
