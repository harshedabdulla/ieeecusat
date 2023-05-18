import React from "react";
import Navbar from "./Navbar";

import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { SlBadge } from "react-icons/sl";

import AnimatedNumbers from "react-animated-numbers";

function Highlights() {
  const memberCount = 173;
  const completedEvents = 304;
  const societyCount = 7;
  const achievementsCount = 102;

  return (
    <>
      <Navbar />
      <section className="min-h-80vh h-full text-black flex flex-col gap-8 items-center justify-center mt-8">
        <h1 className="text-6xl  text-[#01284C]">Highlights</h1>{" "}
        <Type1
          number={memberCount}
          title="Member Count"
          icon={<HiUserGroup style={{ color: "#01284C", opacity: 1 }} />}
        />
        <Type2
          number={completedEvents}
          title="Completed Events"
          icon={
            <BsFillBookmarkCheckFill style={{ color: "#01284C", opacity: 1 }} />
          }
        />
        <Type1
          number={societyCount}
          title="Societies"
          icon={<SlBadge style={{ color: "#01284C", opacity: 1 }} />}
        />
        <Type2
          number={achievementsCount}
          title="Achievements"
          icon={<FaTrophy style={{ color: "#01284C", opacity: 1 }} />}
        />
      </section>
    </>
  );
}

export default Highlights;

const Type1 = ({ number, title, icon }) => {
  return (
    <article className="flex w-full overflow-hidden">
      <div className="w-1/2 flex flex-col items-end pr-8 justify-center skew-x-[-30deg] border-r-4 border-r-slate-900 border-t-2 border-t-[#01284C] border-b-4 border-b-[#01284C] ">
        <div className="inside skew-x-[30deg] flex flex-col items-center justify-center m-2">
          <AnimatedNumbers
            fontStyle={{
              fontSize: 50,
              fontWeight: "bold",
              color: "rgba(1, 40, 76, 0.86)",
            }}
            animateToNumber={number}
            locale="en-US"
            configs={[
              { mass: 1, tension: 220, friction: 100 },
              { mass: 1, tension: 180, friction: 130 },
              { mass: 1, tension: 280, friction: 90 },
              { mass: 1, tension: 180, friction: 135 },
              { mass: 1, tension: 260, friction: 100 },
              { mass: 1, tension: 210, friction: 180 },
            ]}
          ></AnimatedNumbers>
          <h2
            className="text-3xl font-semibold"
            style={{ color: "rgba(1, 40, 76, 0.86)" }}
          >
            {title}
          </h2>
        </div>
      </div>
      <div
        className="w-1/2 flex items-center justify-start pl-8 text-8xl"
        style={{ color: "rgba(1, 40, 76, 0.86)" }}
      >
        {icon}
      </div>
    </article>
  );
};

const Type2 = ({ number, title, icon }) => {
  return (
    <article className="flex w-full overflow-hidden">
      <div
        className="w-1/2 flex items-center justify-end pr-8 text-8xl"
        style={{ color: "rgba(1, 40, 76, 0.86)" }}
      >
        {icon}
      </div>
      <div className="w-1/2 flex flex-col items-start  justify-center skew-x-[-30deg] border-l-4 border-l-slate-900 border-t-2 border-t-[#01284C] border-b-4 border-b-[#01284C] ">
        <div className="inside skew-x-[30deg] flex flex-col items-center justify-center m-2">
          <AnimatedNumbers
            fontStyle={{
              fontSize: 50,
              fontWeight: "bold",
              color: "rgba(1, 40, 76, 0.86)",
            }}
            animateToNumber={number}
            locale="en-US"
            configs={[
              { mass: 1, tension: 220, friction: 100 },
              { mass: 1, tension: 180, friction: 130 },
              { mass: 1, tension: 280, friction: 90 },
              { mass: 1, tension: 180, friction: 135 },
              { mass: 1, tension: 260, friction: 100 },
              { mass: 1, tension: 210, friction: 180 },
            ]}
          ></AnimatedNumbers>
          <h2
            className="text-3xl font-semibold"
            style={{ color: "rgba(1, 40, 76, 0.86)" }}
          >
            {title}
          </h2>
        </div>
      </div>
    </article>
  );
};
