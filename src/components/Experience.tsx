import React from "react";
import Tag from "./Tag";

type Props = {
  experience: Experience;
};

const Experience = ({ experience }: Props) => {
  return (
    <article className="bg-zinc-800 p-4 rounded flex flex-col lg:flex-row gap-4">
      <div className="w-40 h-full flex-shrink-0 text-sm">
        <p>{experience.date}</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-zinc-100">{experience.name}</h3>
          <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
          <p className="text-sm">{experience.place}</p>
        </div>
        <p className="text-sm">{experience.description}</p>
        <ul className="flex text-xs gap-2">
          {experience.tags ? (
            <>
              {experience.tags.map((tag, index) => (
                <li key={index}>
                  <Tag key={index}>{tag}</Tag>
                </li>
              ))}
            </>
          ) : null}
        </ul>
      </div>
    </article>
  );
};

export default Experience;
