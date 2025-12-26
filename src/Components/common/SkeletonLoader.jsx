const SkeletonLoader = ({
  className = "",
}) => {
  return (
    <div
      className={`animate-shimmer bg-linear-to-r from-slate-200 via-slate-300 to-slate-200 ${className}`}
    />
  );
};

export default SkeletonLoader;
