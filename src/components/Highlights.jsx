import React from "react";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { SlBadge } from "react-icons/sl";
import AnimatedNumbers from "react-animated-numbers";
import '../styles/Highlights.css'; // Make sure to create this CSS file

function Highlights() {
  const data = [
    { number: 173, title: "Member Count", Icon: HiUserGroup },
    { number: 304, title: "Completed Events", Icon: BsFillBookmarkCheckFill },
    { number: 7, title: "Societies", Icon: SlBadge },
    { number: 102, title: "Achievements", Icon: FaTrophy }
  ];

  return (
    <section className="highlights">
      <h1 className="title">Highlights</h1>
      <div className="cards-container">
        {data.map((item, index) => (
          <HighlightCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
}

function HighlightCard({ data }) {
  const { Icon } = data;
  return (
    <div className="highlight-card">
      <div className="cards-front">
        <Icon className="icon" />
        <AnimatedNumber number={data.number} />
        <h2 className="card-title">{data.title}</h2>
      </div>
      <div className="cards-back">
        <p>More about {data.title}</p>
      </div>
    </div>
  );
}

function AnimatedNumber({ number }) {
  return (
    <AnimatedNumbers
      fontStyle={{ fontSize: 40, fontWeight: "bold", color: "#01484C" }}
      animateToNumber={number}
      locale="en-US"
      // ... other configs
    />
  );
}

export default Highlights;
