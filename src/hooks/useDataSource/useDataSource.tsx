import * as React from "react";

interface DataSuccess<T> {
  data: T;
  error: false;
  loading: false;
}

interface DataError {
  data: null;
  error: true;
  loading: false;
}

interface DataLoading {
  data: null;
  error: false;
  loading: true;
}

export type DataState<T> = DataSuccess<T> | DataError | DataLoading;

export function useDataSource<T>(dataSource: () => Promise<T>): DataState<T> {
  const [data, setData] = React.useState<T | undefined>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setError(false);
    dataSource()
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return { data: null, error, loading: false };
  }

  if (loading) {
    return { data: null, error: false, loading };
  }

  if (data) {
    return { data, error, loading };
  }

  // TODO think about this
  throw new Error("This shouldn't be possible");
}
