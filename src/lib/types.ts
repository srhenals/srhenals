export type ProjectFrontmatter = {
  /**
   * The title of the project
   */
  title: string;

  /**
   * The description of the project
   */
  description: string;

  /**
   * The tags of the project
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  /**
   * The GitHub URL of the project
   */
  githubUrl?: string;

  /**
   * The live URL of the project
   */
  liveUrl?: string;

  /**
   * Whether the project should be featured on the homepage
   */
  featured?: boolean;

  /**
   * The date the project was created or started in W3C format
   * (this will determine the sort order of the projects)
   */
  timestamp: string;

  /**
   * The URL of the project on the website
   * (eg. https://zaggonaut.dev/projects/my-project)
   */
  filename: string;
};

export type ArticleFrontmatter = {
  /**
   * The title of the article
   */
  title: string;

  /**
   * THe summary description of the article
   */
  description: string;

  /**
   * The tags of the article
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  /**
   * The estimated time to read the article in minutes
   */
  time: number;

  /**
   * Whether the article should be featured on the homepage
   */
  featured: boolean;

  /**
   * The timestamp the article was published in W3C format
   */
  timestamp: string;

  /**
   * The URL of the article on the website
   * (eg. https://zaggonaut.dev/blog/my-article)
   */
  filename: string;
};

export type TravelEntryFrontmatter = {
  /**
   * The title of the travel entry
   */
  title: string;

  /**
   * The summary description of the travel entry
   */
  description: string;

  /**
   * The country visited
   */
  country: string;

  /**
   * The location/city visited
   */
  location: string;

  /**
   * The estimated time to read the entry in minutes
   */
  time: number;

  /**
   * Whether the entry should be featured on the homepage
   */
  featured?: boolean;

  /**
   * The date of the travel day in W3C format
   */
  timestamp: string;

  /**
   * The URL of the entry on the website
   * (eg. https://zaggonaut.dev/travel/my-travel-entry)
   */
  filename: string;
};
