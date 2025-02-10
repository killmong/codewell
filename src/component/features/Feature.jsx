import React from "react";
import "./Features.css";
import Cards2 from "./Cards/Cards2";
import FeatureHeadings from "./FeatureHeadings";
import ListingCards from "./Cards/ListingCards";
import CardCategories from "./Cards/CardCategories";
import CitiesCard from "./Cards/CitiesCard";
import { CiLocationOn } from "react-icons/ci";
const Feature = () => {
  return (
    <div className="innerSection md:pt-24  ">
      <section className="md:pt-32">
        <FeatureHeadings
          link={"#"}
          heading={"Featured Listings"}
          linkText={"Browse all featured"}
        />{" "}
        {/* <div className="flex-container">
          <h2 className="text-5xl font-semibold">Featured Listings</h2>
          <a
            href=""
            className="font-extrabold text-lg absolute right-0 top-1  text-[#191A23]"
          >
            Browse all featured
          </a>
        </div> */}
        <div className="flex flex-col max-w-[1160px]  lg:flex lg:flex-row justify-between relative border-2 border-[#E7DCFF] rounded-[15px] ">
          <div className="lg:w-[500px] rounded-xl lg:h-[426px] ">
            <img
              className=" w-full object-cover h-full rounded-xl"
              src="/src/assets/features/Link.png"
              alt="Link image"
            />
          </div>

          <div className="flex flex-col w-full gap-5 lg:w-[660px]  p-6">
            <div className="lg:flex lg:flex-row  justify-between">
              <h3 className="text-2xl py-3 font-semibold text-[40px]">
                $2,095 <sub className="text-xs md:text-lg">/month</sub>
              </h3>

              <div className="flex flex-row gap-4 ">
                <div className="flex gap-0.5">
                  <div className=" rounded-full my-auto  ">
                    <img src="/src/assets/features/Profile1.png" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold leading-[32px] tracking-normal">
                      Edwin Martins
                    </h3>
                    <p>Property Advisor</p>
                  </div>
                </div>

                <div className="w-[40px] h-[40px] my-auto rounded-full bg-black p-3">
                  <img src="/src/assets/features/icons/callicon.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="inline-block gap-1">
              <h4 className="md:text-[32px]">COVA Home Realty</h4>
              <p className="flex">
                <span>
                  {" "}
                  <img src="/src/assets/agents/location.svg" alt="" />{" "}
                </span>
                2699 Green Valley, Highland Lake, FL
              </p>
            </div>

            <p className="md:text-lg">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation
            </p>

            <div className="flex flex-col lg:flex-row gap-4 mt-4  justify-between px-4 py-5  bg-[#062877]  rounded-2xl border">
              <div>
                <h5 className="text-white ">Bedrooms</h5>
                <div className="flex flex-row gap-2">
                  <img src="/src/assets/svgIcons/bed.svg" alt="bed" />
                  <span className="text-[#FDFCFC] font-bold">4</span>
                </div>
              </div>

              <div>
                <h5 className="text-white ">Bathrooms</h5>
                <div className="flex flex-row gap-2">
                  <img src="/src/assets/svgIcons/tub.svg" alt="bed" />
                  <span className="text-[#FDFCFC] font-bold"> 4</span>
                </div>
              </div>
              <div>
                <h5 className="text-white ">Square area</h5>
                <div className="flex flex-row gap-2">
                  <img src="/src/assets/svgIcons/bed.svg" alt="bed" />
                  <span className="text-[#FDFCFC] font-bold ">
                    6x8m <sup className="font-bold">2</sup>
                  </span>
                </div>
              </div>
              <div>
                <h5 className="text-white ">Environment</h5>
                <div className="flex flex-row gap-2">
                  <img src="/src/assets/svgIcons/brush.svg" alt="bed" />
                  <span className="text-[#FDFCFC]  font-bold">Modern loft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mobileWrapper ">
        <ListingCards
          img={"/src/assets/features/card-img1.png"}
          price={"$15,000"}
          address={"37 Ambleside Gardens,Ilfort,IG4 5HH"}
          name={"Beach Pros Realty Inc."}
          beds={"3 Beds"}
          baths={"3 Baths"}
          area={"5x7m"}
        />

        <ListingCards
          img={"/src/assets/features/card-img2.png"}
          price={"$4,299"}
          address={"3 Leame Close, Hull, HU3 6ND"}
          name={"Beacon Homes LLC"}
          beds={"3 Beds"}
          baths={"2 Baths"}
          area={"7x7m"}
        />

        <ListingCards
          img={"/src/assets/features/card-img3.png"}
          price={"$5,099"}
          address={"28B Highgate Road, London, NW5 1NS"}
          name={"Herringbone Realty"}
          beds={"2 Beds"}
          baths={"3 Baths"}
          area={"5x7m"}
        />
      </div>

      <section className="xl:w-[1160px] md:my-30">
        <div className="flex mt-20  flex-col lg:flex-row md:gap-5 justify-between">
          <div>
            <h2 className="md:text-5xl   text-2xl  max-w-[485px] font-semibold">
              Comfort is our top priority for you
            </h2>
          </div>
          <div className="lg:w-[485px]">
            <p className="font-light   text-xs md:text-lg  text-[#686A79] leading-7 text-left  decoration-skip-ink-none">
              We guarantee that the products we sell will make our customers
              happy because we are very concerned about our consumer
              satisfaction
            </p>
          </div>
        </div>
        <div className=" mobileWrapper m md:flex">
          <Cards2
            heading={"Affordable price"}
            text={
              "We provide the best for you. The price we offer accordance with the quality we provide"
            }
            img={"/src/assets/features/icons/dollar-icon.png"}
          />

          <Cards2
            text={
              "Put your trust in us. We are a legal entity with official legality in the relevant government"
            }
            img={"/src/assets/features/icons/thumbsUp-icon.png"}
            heading={"Clear legality"}
          />
          <Cards2
            text={
              "We always work wih agents in their fields so that we can provide the best quality"
            }
            img={"/src/assets/features/icons/community-icon.png"}
            heading={"Experience agent"}
          />
        </div>
      </section>

      <section>
        <div className=" flex max-w-[1240px]  flex-wrap flex-col padding-container">
          <FeatureHeadings
            heading={"Featured Categories"}
            link={"#"}
            linkText={"Browse all Categories"}
          />

          <div className="mobileWrapper gap-4">
            <CardCategories
              imgLink={"/src/assets/features/icons/cup-icon.png"}
              heading={"Studio"}
              text={"100+ listings"}
            />

            <CardCategories
              imgLink={"/src/assets/features/icons/building-icon.png"}
              heading={"Apartment"}
              text={"100+ listings"}
            />
            <CardCategories
              imgLink={"/src/assets/features/icons/mutilbuildings-icon.png"}
              heading={"Office"}
              text={"100+ listings"}
            />
          </div>
        </div>
      </section>
      <section className="  flex flex-col py-3">
        <FeatureHeadings
          heading={"Explore Cities"}
          link={"#"}
          linkText={"Browse All Cities"}
        />
        <div className="mobileWrapper">
          <CitiesCard
            img={"/src/assets/cities/Link1.png"}
            heading={"Pasadena, Oklahoma"}
            text={"100+ listings"}
            icon={"/src/assets/features/icons/location-icon.png"}
          />
          <CitiesCard
            img={"/src/assets/cities/Link2.png"}
            heading={"Lafayette, California"}
            text={"100+ listings"}
            icon={"/src/assets/features/icons/location-icon.png"}
          />
          <CitiesCard
            img={"/src/assets/cities/Link3.png"}
            heading={"New York"}
            text={"100+ listings"}
            icon={"/src/assets/features/icons/location-icon.png"}
          />
        </div>
      </section>
    </div>
  );
};

export default Feature;
