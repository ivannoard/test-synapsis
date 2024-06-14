export type DataType = {
  title: string;
  body: string;
  user_id: number;
  id?: number;
  image: string;
  category: string;
};

export type CardProps = {
  size?: string;
  data: {
    id?: number;
    title: string;
    body: string;
    image: string;
    category: string;
  };
};

export type ResponseDataType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
  category: string;
  image?: string;
};

export type PaginationType = {
  page: string;
  pages: string;
  limit: string;
  total: string;
};
