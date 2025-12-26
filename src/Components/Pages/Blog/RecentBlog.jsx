import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const RecentBlog = () => {
  const recentPosts = [
    {
      title: "Psychology of High-Stakes Scalping",
      date: "Dec 22, 2025",
      category: "Mindset",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Identifying Liquidity Voids in 2026",
      date: "Dec 20, 2025",
      category: "Analysis",
      image: "https://images.unsplash.com/photo-1633158829875-e5316a358c6f",
    },
    {
      title: "Central Bank Interest Rate Impacts",
      date: "Dec 18, 2025",
      category: "Macro",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    },
  ];

  return (
    <div className="sticky top-28 space-y-10">
      <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h4 className="text-xl font-bold text-slate-900 mb-8 tracking-tighter">
          Recent <span className="text-[#0e5da0]">Insights</span>
        </h4>

        <div className="space-y-8">
          {recentPosts.map((post, i) => (
            <Link to={"/blog-details"} className="">
              <div
                key={i}
                className="group cursor-pointer flex gap-4 space-y-5"
              >
                {/* Image */}
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold text-[#0e5da0] uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">
                      {post.date}
                    </span>
                  </div>

                  <h5 className="font-bold text-slate-900 leading-snug group-hover:text-[#0e5da0] transition-colors line-clamp-2">
                    {post.title}
                  </h5>

                  <div className="mt-2 flex items-center gap-1 text-[10px] font-bold uppercase text-[#0e5da0] opacity-0 group-hover:opacity-100 transition-all -translate-x-2.5 group-hover:translate-x-0">
                    Read More <HiOutlineChevronRight />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button className="w-full mt-8 py-4 border-2 border-slate-100 rounded-2xl text-xs font-bold uppercase tracking-widest text-slate-400  bg-color hover:text-white   transition-all">
          View Newsroom
        </button>
      </div>
    </div>
  );
};

export default RecentBlog;
