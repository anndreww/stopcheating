import { Element } from "react-scroll";
import CountUp from "react-countup";
import { plans } from "../constants/index.jsx"; // Ensure each plan has a stripeLink property
import Button from "../components/Button.jsx";

const Pricing = () => {
  return (
    <section>
      <Element name="pricing">
        <div className="container" id="pricing">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4">
              Your peace of mind is just a click away.
            </h3>
          </div>

          {/* Pricing section */}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)] ${
                  index === 0
                    ? 'bg-red-500 bg-opacity-30 backdrop-blur-lg border-red-700 text-white'
                    : 'bg-white text-black'
                }`}
              >
                <div className="absolute left-0 right-0 z-2 flex items-center justify-center -top-6 xl:-top-11">
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className="object-contain drop-shadow-2xl size-[88px]"
                  />
                </div>

                <div className="relative flex flex-col items-center pt-12">
                  <div className="small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase">
                    {plan.title}
                  </div>

                  <div className="relative z-2 flex items-center justify-center">
                    <div className="h-num flex items-start">
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={plan.priceMonthly} // Only show monthly price
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    <div className="small-1 relative top-3 ml-1 uppercase">
                      / mo
                    </div>
                  </div>
                </div>

                <div className="body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center">
                  {plan.caption}
                </div>

                <ul className="mx-auto space-y-4 xl:px-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="relative flex items-center gap-5">
                      <img
                        src={"/images/check.png"}
                        alt="check"
                        className="size-10 object-contain"
                      />
                      <p className="flex-1">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex w-full justify-center">
                  <Button 
                    icon={plan.icon}
                    onClick={() => window.open(plan.stripeLink, "_blank")}
                  >
                    Get Started
                  </Button>
                </div>

                {index === 1 && (
                  <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                    Limited time offer
                  </p>
                )}
                {index === 2 && (
                  <p className="small-compact mt-9 text-center text-p5 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                    This plan is designed for enterprise customers, providing advanced features for large-scale monitoring, comprehensive reporting, and priority support to meet the needs of businesses and organizations.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
