import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards'; // Adjust the import path as needed

interface Testimonial {
  name: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  { name: "John Doe", feedback: "IEMCS transformed our business with their innovative software solutions." },
  { name: "Jane Smith", feedback: "Their team was professional and delivered on time. Highly recommended!" },
  { name: "Alice Johnson", feedback: "An exceptional experience from start to finish." },
  { name: "Bob Brown", feedback: "The best decision we made was to partner with AchieveX." },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
        <InfiniteMovingCards
          items={testimonials.map((testimonial) => ({
            quote: testimonial.feedback,
            name: testimonial.name,
            title: "Satisfied Customer" // You can customize the title as needed
          }))}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default Testimonials;
