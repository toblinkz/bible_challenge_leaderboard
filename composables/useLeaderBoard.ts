export const getLeaderBoard = async () => {
  let response = (await useApiFetch(
    "/playlog/campaigns/leaderboards?campaign=CAMPAIGN_FAITH&limit=20"
  )) as unknown as any;
  return parseDataFromApi(response.data);
};
