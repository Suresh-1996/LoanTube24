import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Tips for Managing Your Personal Loan Effectively",
    description:
      "Taking out a personal loan can help meet financial needs, but managing it wisely is key to staying debt-free. Learn smart strategies such as creating a repayment-friendly budget, understanding interest calculations, and setting up automatic payments to avoid missed deadlines. By planning ahead and prioritizing timely repayments, you can reduce financial stress, save on interest, and prevent falling into a debt trap.",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    image: "/personal loan.jpg",
    slug: "/blog/ai-tools",
  },
  {
    id: 2,
    title: "Fixed vs. Variable Interest Rates: What You Should Know",
    description:
      "Choosing between fixed and variable interest rates can significantly impact your loan’s cost over time. Fixed rates offer stability with consistent payments, ideal for long-term budgeting, while variable rates may start lower but fluctuate with market changes. This guide breaks down the pros and cons of each, helping you decide which option aligns best with your financial goals and risk tolerance.",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    image: "/fixed vs.jpg",
    slug: "/blog/wellness-coach",
  },
  {
    id: 3,
    title: "How to Improve Your Credit Score Before Applying for a Loan",
    description:
      "A strong credit score opens doors to better loan terms and lower interest rates. Discover practical steps to boost your credit, such as paying bills on time, reducing credit card balances, and correcting errors on your report. With disciplined financial habits, you can enhance your creditworthiness and increase your chances of securing a favorable loan offer.",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    image: "/credit.jpg",
    slug: "/blog/upselling-guide",
  },
  {
    id: 4,
    title: "Debt Consolidation Loans: Are They Right for You?",
    description:
      "Juggling multiple high-interest loans can be overwhelming. Debt consolidation combines them into a single loan, simplifying payments and potentially lowering interest costs. However, it’s not a one-size-fits-all solution—weigh factors like fees, loan terms, and your spending habits to determine if consolidation is the right move for your financial situation.",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    image: "/dept.jpg",
    slug: "/blog/upselling-guide",
  },
];

const BlogCarousel = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-gray-900">
          Latest Blog Posts
        </h2>

        <div className="relative">
          <Slider {...settings} className="pb-10">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="px-3 focus:outline-none"
                tabIndex={0}
                onClick={() => navigate(blog.slug)}
                onKeyDown={(e) => e.key === "Enter" && navigate(blog.slug)}
              >
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">
                  <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 sm:h-56 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="inline-block bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full self-start mb-3">
                      {blog.date}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-blue-600 mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
                      {blog.description}
                    </p>
                    <button
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium self-start"
                      aria-label={`Read more about ${blog.title}}`}
                    >
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
