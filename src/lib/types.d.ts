type NavLink = {
  name: string;
  hashPath: string;
}

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
};

type Experience = {
  name: string;
  place: string;
  date: string;
  description: string;
  tags?: string[];
}