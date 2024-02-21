import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";

import PageHeader from "../components/PageHeader";

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  // console.log(id)
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h2>{item.title}</h2>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Ab eos asperiores
                                  reprehenderit accusantium alias ducimus.
                                  Blanditiis sapiente ullam veniam sint! Iure in
                                  quae, aspernatur facilis voluptatum quo
                                  impedit exercitationem voluptates.
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Dolore rem nisi molestiae
                                    culpa, natus distinctio, explicabo harum
                                    beatae commodi eos, sequi asperiores porro
                                    consequuntur nesciunt impedit nam
                                    dignissimos fugit eveniet.
                                  </p>
                                  <cite>
                                    <a href="#">...Mellissa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Modi aliquid laborum quidem
                                  consectetur accusamus blanditiis debitis
                                  deserunt adipisci harum nam ipsum, iste odit
                                  cum, minus eaque ea quisquam autem ullam.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />

                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Quasi vitae ab minima
                                  temporibus. Ipsam nobis ab cum, accusantium
                                  eum placeat temporibus consectetur sit,
                                  dolorum, nisi tempore qui quibusdam et quo.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://www.aparat.com/v/FyYhP"
                                    className="video-button popup"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Nam, harum! Ex voluptatem
                                  reiciendis nulla incidunt minus! Dolores nihil
                                  ea totam natus amet dignissimos soluta harum
                                  impedit dolor, vel ab sequi.
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">Right Side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
