import React from "react";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { SlBadge } from "react-icons/sl";
import AnimatedNumbers from "react-animated-numbers";
import '../styles/Highlights.css'; // Make sure to create this CSS file

function Highlights() {
  const data = [
    { number: 201, title: "Member Count",desc:"A thriving community of 201 innovative minds, our member count is a testament to the vibrant and collaborative spirit at IEEE CUSAT SB. Each member brings unique ideas and skills, fueling our journey towards technological excellence and professional growth.", Icon: HiUserGroup },
    { number: 304, title: "Completed Events",desc:"With a grand tally of 304 events, our journey has been marked by diverse workshops, seminars, and conferences. These events have been the cornerstone of learning and interaction, bringing the latest in technology and research right to our doorstep.", Icon: BsFillBookmarkCheckFill },
    { number: 7, title: "Societies",desc:"Our branch is home to 7 dynamic societies, each a hub of specialized knowledge and activity. From robotics to power systems, these societies are the beating heart of our branch, driving forward innovation and creating a rich tapestry of technical expertise.", Icon: SlBadge },
    { number: 102, title: "Achievements",desc:"Pride of IEEE CUSAT SB, our 102 achievements are a showcase of our commitment to excellence. Spanning academic, technical, and community-oriented successes, these milestones reflect our relentless pursuit of knowledge.", Icon: FaTrophy }
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
        <p className="px-2 py-2">{data.desc}</p>
        
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
