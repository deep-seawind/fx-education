import React from "react";
import { HiOutlineStar } from "react-icons/hi";

const CourseReview = () => {
  const reviewsData = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Amazing course! Learned so much in a short time.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Very detailed and well-explained content.",
    },
    {
      name: "Mike Johnson",
      rating: 5,
      comment: "Highly recommend for beginners and pros alike!",
    },
  ];

  const ratingDistribution = [80, 15, 4, 1, 0]; // 5-star to 1-star

  return (
    <section id="Reviews" className="scroll-mt-32 space-y-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
        Ratings & Reviews
      </h2>

      {/* Global Rating */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 p-6 md:p-10 bg-slate-50 rounded-3xl md:rounded-[2.5rem] border border-slate-100">
        <div className="text-center">
          <div className="text-5xl md:text-7xl font-semibold text-slate-900 leading-none">
            4.9
          </div>
          <div className="flex text-amber-500 justify-center my-3 md:my-4">
            <HiOutlineStar />
            <HiOutlineStar />
            <HiOutlineStar />
            <HiOutlineStar />
            <HiOutlineStar />
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            Global Rating
          </p>
        </div>

        {/* Rating Distribution */}
        <div className="w-full flex-1 space-y-3">
          {ratingDistribution.map((w, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400 w-3">
                {5 - i}
              </span>
              <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0e5da0]"
                  style={{ width: `${w}%` }}
                />
              </div>
              <span className="text-xs font-bold text-slate-400 w-8">{w}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviewsData.map((review, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-900">{review.name}</h4>
              <div className="flex text-amber-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <HiOutlineStar key={i} />
                ))}
              </div>
            </div>
            <p className="text-sm text-slate-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseReview;
