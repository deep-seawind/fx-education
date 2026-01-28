// components/blog/BlogSection.jsx

import Breadcrumbs from "../../common/Breadcrumbs";
import BlogCard from "./BlogCard";

const brandColor = "#0e5da0";

const BlogSection = () => {
  return (
    <>
      <Breadcrumbs paths={["Home", "Blog", "Market Insights"]} />

      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-4xl">
              <span
                className="text-xs font-semibold uppercase tracking-[0.3em] mb-4 block"
                style={{ color: brandColor }}
              >
                Educational Insights
              </span>

              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tighter leading-tight">
                Latest from the
                <span
                  className="text-transparent bg-clip-text pe-2"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, ${brandColor}, #073a66)`,
                  }}
                >
                  Trading Desk.
                </span>
              </h2>
            </div>
 
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
