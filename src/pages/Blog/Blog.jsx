import { demoPost as data } from "cs-demo-data/data";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="blog-hero py-20">
        <div className="container mx-auto">
          <div className="blog-header text-center">
            <h2 className="text-[50px] font-bold">Our Blog</h2>
            <p className="w-1/2 mx-auto text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
              rem. Quae veritatis eius praesentium quo amet ut odio. Illum,
              expedita.
            </p>
          </div>

          <div className="blog-archive mt-16 grid grid-cols-3 gap-8">
            {data.map((item) => {
              return (
                <div key={item} className="blog-item relative">
                  <Link to={`/blog/${item.id}`}>
                    <img className="w-full" src={item.featuredImg} alt="" />

                    <h3 className="text-sm font-bold py-2 px-3 rounded-full bg-[#f05a5fda] text-white inline-block absolute top-5 left-5">
                      {item.anthor}
                    </h3>

                    <h2 className="font-bold text-lg py-3">{item.title}</h2>
                    <p>{item.description}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
