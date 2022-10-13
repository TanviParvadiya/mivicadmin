import React from "react";
import "./blog.css";
import Grid from "@mui/material/Grid";
import bg from "../../../Image/blog/first-blog.jpg";
import bg1 from "../../../Image/blog/2.jpg";
import bg2 from "../../../Image/blog/3.jpg";
import bg3 from "../../../Image/blog/4.jpg";
import bg4 from "../../../Image/blog/5.jpg";
import bg5 from "../../../Image/blog/6.jpg";
import bg6 from "../../../Image/blog/7.jpg";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ChatIcon from "@mui/icons-material/Chat";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Clip from "./Clip";
const Blog = () => {
  return (
    <>
       <Clip/>
      <div className="blog">
        <div className="theme-box-shadow">
          <h6 className="defultheading">Blogs</h6>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <img src={bg} alt="blog" />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <img src={bg1} alt="blog" />
                </Grid>
                <Grid item xs={6}>
                  <div className="smlsideblog">
                    <div className="blogdate">
                      <h2>03</h2>
                      <span>January 2021</span>
                    </div>
                    <h6>Perspiciatis unde omnis iste natus</h6>
                    <div className="adminby">
                      <ul>
                        <li>by: Admin</li>
                        <li>12 Hits</li>
                      </ul>
                    </div>
                    <p>
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                      sit.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <img src={bg2} alt="blog" />
                </Grid>
                <Grid item xs={6}>
                  <div className="smlsideblog">
                    <div className="blogdate">
                      <h2>03</h2>
                      <span>January 2021</span>
                    </div>
                    <h6>Perspiciatis unde omnis iste natus</h6>
                    <div className="adminby">
                      <ul>
                        <li>by: Admin</li>
                        <li>12 Hits</li>
                      </ul>
                    </div>
                    <p>
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                      sit.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <div className="smllscdblog">
                <img src={bg3} alt="blog" />
                <div className="blog-details-second">
                  <div className="blog-post-date">
                    <span className="blg-month">apr</span>
                    <span className="blg-date">10</span>
                  </div>
                  <h6>Perspiciatis unde omnis.</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>
                  <div className="cardblog-footer">
                    <ul className="ul-unstyled">
                      <li className="dflex dflex-space-between flex-align-item-center">
                        <SupervisorAccountIcon />
                        <span>Admin</span>
                      </li>
                      <li className="dflex dflex-space-between flex-align-item-center">
                        <ChatIcon />
                        <span>5 Comment</span>
                      </li>
                      <li className="dflex dflex-space-between flex-align-item-center">
                        <ThumbUpOffAltIcon />
                        <span>2 Like</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="smllscdblog">
                <img src={bg4} alt="blog" />
                <div className="blog-details-second">
                  <div className="blog-post-date">
                    <span className="blg-month">apr</span>
                    <span className="blg-date">10</span>
                  </div>
                  <h6>Perspiciatis unde omnis.</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>
                  <div className="cardblog-footer">
                    <ul className="ul-unstyled">
                      <li className="dflex dflex-space-between flex-align-item-center">
                        <SupervisorAccountIcon />
                        <span>Admin</span>
                      </li>
                      <li className="dflex dflex-space-between flex-align-item-center">
                        <ChatIcon />
                        <span>5 Comment</span>
                      </li>
                      <li className="dflex dflex-space-between flex-align-item-center">
                        <ThumbUpOffAltIcon />
                        <span>2 Like</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="smllscdblog">
                <img src={bg5} alt="blog" />
                <div className="blog-details-second">
                  <div className="blog-post-date">
                    <span className="blg-month">apr</span>
                    <span className="blg-date">10</span>
                  </div>
                  <h6>Perspiciatis unde omnis.</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>
                  <div className="cardblog-footer">
                    <ul className="ul-unstyled">
                      <li className="dflex dflex-space-between flex-align-item-center">
                        <SupervisorAccountIcon />
                        <span>Admin</span>
                      </li>
                      <li className="dflex dflex-space-between flex-align-item-center">
                        <ChatIcon />
                        <span>5 Comment</span>
                      </li>
                      <li className="dflex dflex-space-between flex-align-item-center">
                        <ThumbUpOffAltIcon />
                        <span>2 Like</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="smllscdblog">
                <img src={bg6} alt="blog" />
                <div className="blog-details-second">
                  <div className="blog-post-date">
                    <span className="blg-month">apr</span>
                    <span className="blg-date">10</span>
                  </div>
                  <h6>Perspiciatis unde omnis.</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>
                  <div className="cardblog-footer">
                    <ul className="ul-unstyled">
                      <li className="dflex dflex-space-between flex-align-item-center">
                        <SupervisorAccountIcon />
                        <span>Admin</span>
                      </li>
                      <li className="dflex dflex-space-between flex-align-item-center">
                        <ChatIcon />
                        <span>5 Comment</span>
                      </li>
                      <li className="dflex dflex-space-between flex-align-item-center">
                        <ThumbUpOffAltIcon />
                        <span>2 Like</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
   
    </>
  );
};

export default Blog;
