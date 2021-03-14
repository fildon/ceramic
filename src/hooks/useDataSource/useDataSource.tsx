import * as React from "react";

type DataSuccess<T> = {
  state: "success";
  data: T;
};

type DataError = {
  state: "error";
};

type DataLoading = {
  state: "loading";
};

export type DataResult<T> = DataSuccess<T> | DataError | DataLoading;

export function useDataSource<T>(
  dataSource: () => Promise<T>
): DataResult<T> & { refresh: () => void } {
  const [data, setData] = React.useState<DataResult<T>>({
    state: "loading",
  });

  const refresh = React.useCallback(() => {
    setData({
      state: "loading",
    });

    dataSource()
      .then((newData) => setData({ state: "success", data: newData }))
      .catch(() => setData({ state: "error" }));
  }, []);

  React.useEffect(refresh, []);

  return { ...data, refresh };
}
