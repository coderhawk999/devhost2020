import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ScrollAnimation from "react-animate-on-scroll";

const Speakers = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "images/speaker_2.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <main>
      <style jsx>{`
        .parent-div {
          margin-top: 150px;
          display: flex;
          flex-direction: column;
        }
        p {
          margin: 0;
        }
        .svg-x {
          margin-top: 35px;
          margin-left: 20px;
        }
        .red-underline {
          border-bottom: solid #d32f2f 6px;
          margin-top: 5px;
          width: 220px;

          margin-right: 8px;
        }
        .title {
          color: white;
          font-family: Gilmer-heavy;
          font-size: 55px;
          text-align: left;
        }
        .holder {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        }
        .title-holder {
          display: flex;
          flex-direction: column;
        }
        .cards {
          margin-top: 90px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
        .card {
          min-width: 250px;
          margin: 30px;
          background-color: #272727;
          max-width: 280px;
          transition: all 0.2s ease-in;
        }
        .Notice {
          display: flex;
          justify-content: center;
          text-align: center;
          color: grey;
          padding: 50px;
          font-family: Gilmer-bold;
          font-size: 30px;
          margin-top: 100px;
        }

        .card:hover {
          -webkit-box-shadow: 0px 2px 6px 2px rgba(211, 47, 47, 1);
          -moz-box-shadow: 0px 2px 6px 2px rgba(211, 47, 47, 1);
          box-shadow: 0px 2px 6px 2px rgba(211, 47, 47, 1);
        }
        .card-image {
          max-width: 300px;
          min-height: 190px;
          max-height: 190px;
        }
        .card-title {
          text-align: center;
          margin-top: 10px;
          font-family: Gilmer-bold;
          letter-spacing: 1px;
          font-size: 20px;
          color: white;
        }
        .card-title-designation {
          text-align: center;
          margin-top: 3px;
          font-family: Gilmer-light;
          letter-spacing: 1px;
          font-size: 10px;
          color: white;
        }
        .card-line-red {
          height: 7px;
          background-color: red;
        }
        .card-content {
          padding-bottom: 20px;
        }

        @media (max-width: 1024px) {
          .title {
            text-align: center;
          }
          .holder {
            justify-content: center;
            flex-direction: column;
          }
          .svg-x {
            align-self: center;
          }

          .underline-div {
            align-self: center;
          }

          .cards {
            margin-top: 30px;
          }

          .Notice {
            display: flex;
            justify-content: center;
            text-align: center;
            color: grey;
            padding: 30px;
            font-family: Gilmer-bold;
            font-size: 20px;
            margin-top: 50px;
          }
        }
        @media (max-width: 766px) {
          .title {
            font-size: 60px;
          }
          .prefix {
            font-size: 30px;
          }
          .red-underline {
            width: 180px;
          }
          .Notice {
            display: flex;
            justify-content: center;
            text-align: center;
            color: grey;
            padding: 20px;
            font-family: Gilmer-bold;
            font-size: 20px;
            margin-top: 20px;
          }
        }

        @media (max-width: 480px) {
          .red-underline {
            width: 150px;
          }
          .title {
            font-size: 40px;
          }
          .prefix {
            font-size: 20px;
          }
          .Notice {
            display: flex;
            justify-content: center;
            text-align: center;
            color: grey;
            padding: 16px;
            font-family: Gilmer-bold;
            font-size: 16px;
            margin-top: 10px;
          }
        }
      `}</style>
      <div className="parent-div">
        <ScrollAnimation animateIn="fadeIn">
          <div className="holder">
            <div className="title-holder">
              <p className="title">Speakers</p>
              <div className="underline-div">
                {" "}
                <div className={"red-underline"}></div>
              </div>{" "}
            </div>
            <div className="svg-x">
              <svg
                width="58"
                height="58"
                viewBox="0 0 78 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.86562 51.6282L0.342072 55.2123L23.2589 77.8476L26.7825 74.2635L3.86562 51.6282Z"
                  fill="#D32F2F"
                />
                <path
                  d="M23.0552 51.4873L0.4729 74.458L4.04865 77.9898L26.6309 55.0191L23.0552 51.4873Z"
                  fill="#D32F2F"
                />
                <path
                  d="M3.52623 0.51921L0.00268555 4.10336L22.9196 26.7387L26.4431 23.1545L3.52623 0.51921Z"
                  fill="#585857"
                />
                <path
                  d="M22.7162 0.378047L0.133942 23.3488L3.70969 26.8806L26.292 3.90987L22.7162 0.378047Z"
                  fill="#585857"
                />
                <path
                  d="M54.7395 0.144209L51.2159 3.72836L74.1328 26.3637L77.6563 22.7795L54.7395 0.144209Z"
                  fill="#D32F2F"
                />
                <path
                  d="M73.9497 0.0033186L51.3675 22.974L54.9432 26.5059L77.5255 3.53514L73.9497 0.0033186Z"
                  fill="#D32F2F"
                />
                <path
                  d="M55.0788 51.2762L51.5553 54.8604L74.4722 77.4957L77.9957 73.9115L55.0788 51.2762Z"
                  fill="#585857"
                />
                <path
                  d="M74.2887 51.1374L51.7064 74.1082L55.2822 77.64L77.8645 54.6693L74.2887 51.1374Z"
                  fill="#585857"
                />
              </svg>
            </div>
          </div>
          <div className="Notice">
            <p>Yet to be Announced</p>
          </div>
          {/* <div className="cards-holder">
            <div className="cards">
              <div className="card">
                {" "}
                <div className="card-image">
                  <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="A corgi smiling happily"
                  />
                </div>
                <div className="card-content">
                  <div className="card-line-red"></div>
                  <div className="card-title">Musthak</div>
                  <div className="card-title-designation">
                    Github Campus export
                  </div>
                </div>
              </div>
              <div className="card">
                {" "}
                <div className="card-image">
                  <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="A corgi smiling happily"
                  />
                </div>
                <div className="card-content">
                  <div className="card-line-red"></div>
                  <div className="card-title">Musthak</div>
                  <div className="card-title-designation">
                    Github Campus export
                  </div>
                </div>
              </div>
              <div className="card">
                {" "}
                <div className="card-image">
                  <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="A corgi smiling happily"
                  />
                </div>
                <div className="card-content">
                  <div className="card-line-red"></div>
                  <div className="card-title">Musthak</div>
                  <div className="card-title-designation">
                    Github Campus export
                  </div>
                </div>
              </div>
              <div className="card">
                {" "}
                <div className="card-image">
                  <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="A corgi smiling happily"
                  />
                </div>
                <div className="card-content">
                  <div className="card-line-red"></div>
                  <div className="card-title">Musthak</div>
                  <div className="card-title-designation">
                    Github Campus export
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </ScrollAnimation>
      </div>
    </main>
  );
};

export default Speakers;
