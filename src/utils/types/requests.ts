export type LoginRequest = {
  Email: string;
  Password: string;
};

export type CreateGameRequest = {
  Title: string;
  CoverImageUrl: string;
  Description: string;
  Year: number;
  ImdbScore: number;
  TrailerYouTubeUrl: string;
  GameplayYouTubeUrl: string;
  genres: string[];
};

export type UpdateGameRequest = {
  id?: string;
  Title?: string;
  CoverImageUrl?: string;
  Description?: string;
  Year?: number;
  ImdbScore?: number;
  TrailerYouTubeUrl?: string;
  GameplayYouTubeUrl?: string;
  genres?: string[];
};

export type CreateProfileRequest = {
  Title: string;
  ImageURL: string;
  
}

export type UpdateProfileRequest = {
  id: string;
  Title: string;
  ImageURL: string;
}

export type Profile = {
  id: string;
  Title: string;
  ImageURL: string;
}

export type User = {
  Name: string;
  Email: string;
  Password: string;
  CPF: string;
}
