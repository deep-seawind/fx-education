import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  HiOutlineClock, 
} from "react-icons/hi2";
import BlogCardSkeleton from "./BlogCardSkeleton";
import { Link } from "react-router-dom";

const BLOG_POSTS = [
  {
    id: 1,
    category: "Market Analysis",
    title: "Understanding Institutional Liquidity: The SMC Guide",
    excerpt:
      "Learn how big banks manipulate price action and how you can spot their footprints in the market.",
    author: "Alex Rivera",
    date: "Dec 24, 2025",
    readTime: "8 min read",
    image: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    category: "Psychology",
    title: "The Discipline Gap: Why 90% of Traders Fail",
    excerpt:
      "Exploring the neurological triggers that cause emotional trading and how to build a robotic mindset.",
    author: "Sarah Chen",
    date: "Dec 22, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    category: "Technical",
    title: "Mastering Fibonacci in Trend Continuation",
    excerpt:
      "A deep dive into using golden ratios to find high-probability entry zones during trending markets.",
    author: "Marcus Vane",
    date: "Dec 20, 2025",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    category: "Risk Management",
    title: "Position Sizing: The Missing Link to Long-Term Profitability",
    excerpt:
      "Why proper position sizing matters more than your win rate and how professionals control risk per trade.",
    author: "Daniel Brooks",
    date: "Dec 18, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1630569470960-ec1e8c077d6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    category: "Strategy",
    title: "Breakout vs Fakeout: How Institutions Trap Retail Traders",
    excerpt:
      "Learn how to identify false breakouts and align your entries with institutional order flow.",
    author: "Elena Novak",
    date: "Dec 15, 2025",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    category: "Trading Systems",
    title: "Building a Rule-Based Trading Plan That Scales",
    excerpt:
      "A step-by-step guide to creating a repeatable trading system that removes emotion and improves consistency.",
    author: "Michael Torres",
    date: "Dec 12, 2025",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?auto=format&fit=crop&w=1200&q=80",
  },
];

const brandColor = "#0e5da0";

const BlogCard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return (
      <>
        {[...Array(6)].map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </>
    );
  }
  return (
    <>
      {BLOG_POSTS.map((post) => (
        <Link to={`/blog-details`}>
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
          >
            {/* Wrap card in Link */}

            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />

              <div
                className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-md"
                style={{ backgroundColor: `${brandColor}dd` }}
              >
                {post.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col grow z-20 relative">
              <div className="flex items-center gap-4 mb-4 text-slate-400 text-xs font-bold uppercase">
                <div className="flex items-center gap-1.5">
                  <HiOutlineClock />
                  {post.readTime}
                </div>
                <span className="w-1 h-1 rounded-full bg-slate-200" />
                <span>{post.date}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-[#0e5da0] transition-colors">
                {post.title}
              </h3>

              <p className="text-slate-500 leading-relaxed line-clamp-2 grow">
                {post.excerpt}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default BlogCard;
