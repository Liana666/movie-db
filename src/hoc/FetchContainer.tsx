import { List } from "../components/shared/List/List";

type Props = {
  fetch: object;
};

export const FetchContainer: React.FC<Props> = ({ fetch }: any) => {
  const { data, isLoading, isError, isSuccess } = fetch;

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  return <>{isSuccess && data ? <List data={data} /> : null}</>;
};
