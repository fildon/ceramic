import * as React from "react";

type Refreshable = { refresh: () => void };

type DataSuccess<T> = {
  state: "success";
  data: T;
} & Refreshable;

type DataError = {
  state: "error";
} & Refreshable;

type DataLoading = {
  state: "loading";
} & Refreshable;

export type DataResult<T> = DataSuccess<T> | DataError | DataLoading;

export function useDataSource<T>(dataSource: () => Promise<T>): DataResult<T> {
  const [data, setData] = React.useState<T | undefined>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const refresh = React.useCallback(() => {
    setLoading(true);
    setError(false);
    dataSource()
      .then((newData) => setData(newData))
      .catch(() => setError(true)) // TODO do something with the caught error?
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(refresh, []);

  if (error) {
    return { state: "error", refresh };
  }

  if (loading) {
    return { state: "loading", refresh };
  }

  if (data) {
    return { state: "success", data, refresh };
  }

  // TODO refactor the above so that this line is not necessary
  throw new Error("This shouldn't be possible");
}
