export interface Posts {
  _id: string;
  title: string;
  slug: { current: string };
  _createdAt: string;
  categoriesTitle: string[];
  categoriesDescription: string[];
  authorName: string;
  authorImage: {};
  postImage: {};
  // Making the children array optional and allowing body to be an array of any objects
  body: [];
  isMobile: boolean;
  previewText: string;
}

export interface Categories {
  _id: string;
  categoriesTitle: string;
  categoriesDescription: string;
}
