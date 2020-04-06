export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getRatingLevel = (ratingScore) => {
  if (ratingScore < 0) {
    throw new Error(`Score can't be negative`);
  }
  if (ratingScore < 3) {
    return `Bad`;
  }
  if (ratingScore < 5) {
    return `Normal`;
  }
  if (ratingScore < 8) {
    return `Good`;
  }
  if (ratingScore < 10) {
    return `Very good`;
  }
  if (ratingScore === 10) {
    return `Awesome`;
  }
  return ``;
};

export const formatMovieDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}h ${(`0` + minutes).slice(-2)}m`;
};

export const formatPlayerTime = (time) => [60, 60, 24].map((n) => {
  const result = time % n;
  time = (time - result) / n;
  return (`0` + result).slice(-2);
}).reverse().join(`:`);

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
  actors: movie.starring,
  runTime: movie.run_time,
  genre: movie.genre,
  releaseYear: movie.released,
  id: movie.id,
  isFavorite: movie.is_favorite,
  videoUrl: movie.video_link,
  previewUrl: movie.preview_video_link
});

export const normalizeMoviesData = (movies) => movies.map(normalizeMovieData);


export const normalizeUserData = (user) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    avatarUrl: user[`avatar_url`],
  };
};
