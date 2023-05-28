const extractTokensFromUrl = (url: string) => {
  const parsedUrl = new URL(url);
  const searchParams = new URLSearchParams(parsedUrl.hash.slice(1));
  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");
  return {
    accessToken,
    refreshToken,
  };
};

export { extractTokensFromUrl };
