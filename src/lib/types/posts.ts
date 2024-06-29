export interface Posts {
  _id: string;
  title: string;
  slug: { current: string };
  _createdAt: string;
  categories: string[];
  authorName: string;
  authorImage: {};
  // Making the children array optional and allowing body to be an array of any objects
  body: [];
}
