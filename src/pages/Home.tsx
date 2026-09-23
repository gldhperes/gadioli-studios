// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/sections/Hero';
import Categories from '../components/sections/Categories';
import Gallery from '../components/sections/Gallery';
import Process from '../components/sections/Process';
import FAQ from '../components/sections/FAQ';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';
// import OrderForm from '../components/sections/OrderForm';

// Data
import models from '../data/models.ts';

// Style
import styles from './Home.module.css';

export default function Home() {


  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Gallery models={models} />
        <Process />
        <Testimonials />
        <FAQ />
        <CTASection />
        
      </main>
      <Footer />
    </div>
  );
}