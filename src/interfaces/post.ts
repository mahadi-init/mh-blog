export interface PostInfo {
  _id: string;
  _createdAt: string;
  readTime: number;
  title: string;
  shortDesc: string;
}

export interface PostData extends PostInfo {
  table: string[];
  content: string;
  tags: string[];
}
