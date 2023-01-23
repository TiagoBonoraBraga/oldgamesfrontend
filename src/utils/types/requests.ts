export type LoginRequest = {
    Email: string;
    Password: string;
}

export type CreateGameRequest = {
    Title: string;
    CoverImageUrl: string;
    Description: string;
    Year: number;
    ImdbScore: number;
    TrailerYouTubeUrl: string;
    GameplayYouTubeUrl: string;
    genres: string;
}