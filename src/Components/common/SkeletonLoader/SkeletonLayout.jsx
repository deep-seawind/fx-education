import Skeleton from "./Skeleton";

const SkeletonLayout = ({ layout = [] }) => {
  return (
    <div className="space-y-4">
      {layout.map((item, index) => (
        <Skeleton
          key={index}
          width={item.width}
          height={item.height}
          rounded={item.rounded}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default SkeletonLayout;
