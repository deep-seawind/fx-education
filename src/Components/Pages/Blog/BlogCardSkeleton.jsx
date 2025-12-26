import SkeletonLoader from "../../common/SkeletonLoader"; 

const BlogCardSkeleton = () => {
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl">
      {/* Image */}
      <SkeletonLoader className="h-64 w-full" />

      {/* Content */}
      <div className="p-8 space-y-4">
        <div className="flex gap-3">
          <SkeletonLoader className="h-3 w-20" />
          <SkeletonLoader className="h-3 w-16" />
        </div>

        <SkeletonLoader className="h-6 w-3/4" />
        <SkeletonLoader className="h-4 w-full" />
        <SkeletonLoader className="h-4 w-5/6" />

        <div className="flex items-center justify-between pt-6">
          <div className="flex items-center gap-3">
            <SkeletonLoader className="w-10 h-10 rounded-full" />
            <SkeletonLoader className="h-4 w-24" />
          </div>
          <SkeletonLoader className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
