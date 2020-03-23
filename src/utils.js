export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatReviewDate = ({comment, date, id, rating, user}) => ({
  comment,
  date: new Date(date).toLocaleString(`en-us`, {
    month: `long`,
    year: `numeric`,
    day: `numeric`
  }),
  id,
  rating,
  user
});

export const normalizeMovieData = (movie) => ({
  title: movie.name,
  poster: movie.poster_image,
  preview: movie.preview_image,
  bgPosterUrl: movie.background_image,
  backgroundColor: movie.background_color,
  description: movie.description,
  ratingScore: movie.rating,
  ratingCount: movie.scores_count,
  director: movie.director,
  starring: movie.starring,
  runTime: movie.run_time,
  genre: movie.genre,
  releaseYear: movie.released,
  id: movie.id,
  isFavorite: movie.is_favorite,
  videoUrl: movie.video_link,
  previewUrl: movie.preview_video_link
});

export const normalizeMoviesData = (movies) => movies.map(normalizeMovieData);
