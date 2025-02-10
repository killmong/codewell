import React from "react";
import AgentsCard from "./AgentsCard";
import FeatureHeadings from "../features/FeatureHeadings";
const Agent = () => {
  return (
    <section className=" flex innerSection max-w-[1240px]  flex-col ">
      <FeatureHeadings
        heading={"Meet Our Agents"}
        link={"#"}
        linkText={"Browse All Agents"}
      />
      <div className=" xl:grid xl:grid-cols-2 flex-wrap flex  gap-3 justify-center 2xl:grid 2xl:grid-cols-3 xl:gap-y-2 ">
        <AgentsCard
          heading={"Edwin Martins"}
          text={"Property Advisor"}
          imgLink={"/src/assets/agents/agent1.png"}
        />
        <AgentsCard
          heading={"Robert Fox"}
          text={"Leasing Agent"}
          imgLink={"/src/assets/agents/agent2.png"}
        />
        <AgentsCard
          heading={"Guy Hawkins"}
          text={"Property Advisor"}
          imgLink={"/src/assets/agents/Link (3).png"}
        />
        <AgentsCard
          heading={"Jane Cooper"}
          text={"Property Consultant"}
          imgLink={"/src/assets/agents/Link (4).png"}
        />
        <AgentsCard
          heading={"Wade Warren"}
          text={"Property Manager"}
          imgLink={"/src/assets/agents/Link (5).png"}
        />
        <AgentsCard
          heading={"Kathryn Murphy"}
          text={"Property Consultant"}
          imgLink={"/src/assets/agents/agent6.png"}
        />
      </div>
    </section>
  );
};

export default Agent;
