import * as React from "react";

export enum DataStates {
  Loading,
  Error,
  Success,
}

type DataSuccess<T> = {
  state: DataStates.Success;
  data: T;
  refresh: () => void;
};

type DataError = {
  state: DataStates.Error;
  refresh: () => void;
};

type DataLoading = {
  state: DataStates.Loading;
  refresh: () => void;
};

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
    return { state: DataStates.Error, refresh };
  }

  if (loading) {
    return { state: DataStates.Loading, refresh };
  }

  if (data) {
    return { state: DataStates.Success, data, refresh };
  }

  // TODO refactor the above so that this line is not necessary
  throw new Error("This shouldn't be possible");
}
