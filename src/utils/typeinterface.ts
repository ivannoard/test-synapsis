export interface DataType {
  title: string;
  body: string;
  user_id: number;
  id: number;
  image: string;
  category: string;
}

export interface CardProps {
  size?: string;
  data: {
    title: string;
    body: string;
    image: string;
    category: string;
  };
}
