export type ImageType = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type Reaction = 'like' | 'dislike' | 'favorites';
export type UserActionLog = {
  date: string;
  imgId: string;
  reaction: Reaction;
};
export interface LikeTypeBase {
  country_code: string;
  id: number;
  image_id: string;
  sub_id: string;
  value: number;
}

export interface LikeType extends LikeTypeBase {
  message: string;
}
export interface LikeTypeFul extends LikeTypeBase {
  created_at: string;
  image: {
    id: string;
    url: string;
  };
}
