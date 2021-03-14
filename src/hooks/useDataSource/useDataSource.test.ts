import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useDataSource } from "./useDataSource";

describe("useDataSource", () => {
  const mockSuccessfulDataSource = jest.fn().mockResolvedValue("mock data");
  const mockFailingDataSource = jest.fn().mockRejectedValue("mock error");

  it("initially returns DataLoading then DataSuccess", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useDataSource(mockSuccessfulDataSource)
    );

    expect(mockSuccessfulDataSource).toHaveBeenCalled();
    expect(result.current).toMatchObject({
      state: "loading",
    });

    await waitForNextUpdate();

    expect(result.current).toMatchObject({
      state: "success",
      data: "mock data",
    });
  });

  it("returns DataError in case of failing data source", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useDataSource(mockFailingDataSource)
    );

    expect(mockFailingDataSource).toHaveBeenCalled();
    expect(result.current).toMatchObject({
      state: "loading",
    });

    await waitForNextUpdate();

    expect(result.current).toMatchObject({
      state: "error",
    });
  });

  it("returns a refresh callback which invokes the original data source again", async () => {
    let counter = 0;
    const mockDataSourceThatCounts = jest.fn().mockImplementation(() => {
      counter++;
      return Promise.resolve(counter);
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useDataSource(mockDataSourceThatCounts)
    );

    expect(result.current).toMatchObject({
      state: "loading",
    });

    await waitForNextUpdate();

    expect(result.current).toMatchObject({
      state: "success",
      data: 1,
    });

    act(() => {
      result.current.refresh();
    });

    expect(result.current).toMatchObject({
      state: "loading",
    });

    await waitForNextUpdate();

    expect(result.current).toMatchObject({
      state: "success",
      data: 2,
    });
  });

  it.todo("feature: dependency array that triggers data refetch");
});
