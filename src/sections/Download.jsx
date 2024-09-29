import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";
import { Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Download = () => {
  return (
    <section>
      <Element
        name="info"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>

              <p className="body-1 max-w-md">
              Take control, uncover the truth, and regain peace of mind, because you deserve clarity in your relationship.
              </p>

              <p className="body-1 max-w-md max-md:py-10 mb-10">
              Shockingly, 83% of all Americans engage in some form of infidelity at some point in their lives.
    
              <br></br>A striking 90% of women and 77% of men confess to committing emotional infidelity, indicating that women may cheat more in this aspect.
              </p>


              <LinkScroll to="pricing" offset={-100} spy smooth>
              <Button icon="/images/faq-logo.svg">get back</Button>
              </LinkScroll>

              
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/ogim.webp"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};
export default Download;
