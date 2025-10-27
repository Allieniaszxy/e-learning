import React from "react";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah K.",
      title: "Software Engineer",
      quote:
        "This platform completely changed the trajectory of my career. The courses are practical, up-to-date, and taught by true experts. I can’t recommend it enough for professional growth.",
      image: "/images/python-bg.jpg", // Replace with actual image path
    },
    {
      name: "David L.",
      title: "HR Director at GlobalCorp",
      quote:
        "E-Learn has become an invaluable partner for our corporate training initiatives. The breadth of courses and the quality of instruction are exceptional, boosting our team’s capabilities significantly.",
      image: "/images/pmp-course.jfif", // Replace with actual image path
    },
    {
      name: "Emily R.",
      title: "Marketing Manager",
      quote:
        "The flexibility and depth of the courses have transformed our team’s skill set. Highly recommend for anyone looking to upskill in a dynamic environment.",
      image: "/images/cybersecurity-course.jfif", // Replace with actual image path
    },
  ];

  return (
    <div className="py-10 bg-gray-100 text-center">
      <h2 className="text-2xl text-gray-800 mb-6 font-bold">
        What Our Partners & Students Say
      </h2>
      <div className="flex justify-center gap-5 flex-wrap">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md w-full max-w-xs text-left mb-5"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-800 italic">{`"${testimonial.quote}"`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
