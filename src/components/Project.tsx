import Image from "next/image";

import Tag from "./Tag";

type Props = {
  project: Project;
};

const Project = ({ project }: Props) => {
  return (
    <article className="bg-zinc-800 p-4 rounded flex flex-row gap-4">
      <div className="relative w-40 h-24  rounded overflow-hidden flex-shrink-0">
        <Image
          src={project.imageUrl}
          alt="project image"
          referrerPolicy="no-referrer"
          fill
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-zinc-100">{project.title}</h3>
        <p className="text-sm line-clamp-3">{project.description}</p>
        <ul className="flex text-xs gap-2">
          {project.tags ? (
            <>
              {project.tags.map((tag, index) => (
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

export default Project;
