// export type ImageType = {
//   id: string;
//   url: string;
//   width: number;
//   height: number;
// };

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

export type Breed = {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  weight: {
    imperial: string;

    metric: string;
  };
  height: string;
  life_span: string;
  bred_for: string;
  breed_group: string;
  reference_image_id: string;
};

export type Image = {
  id: string;
  url: string;
  width: number;
  height: number;
  mime_type: string;
  breeds: [
    {
      id: number;
      name: string;
    }
  ];
  categories: [];
  breed_ids: string;
};
