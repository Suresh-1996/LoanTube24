// BlogPage.jsx
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { slug } = useParams();

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">
        Blog Page: {slug.replace("-", " ")}
      </h1>
      <p className="text-gray-500 mt-2">Coming soon...</p>
    </div>
  );
};

export default BlogPage;
