import { renderHook } from "@testing-library/react-hooks";
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
      data: null,
      error: false,
      loading: true,
    });

    await waitForNextUpdate();

    expect(result.current).toMatchObject({
      data: "mock data",
      error: false,
      loading: false,
    });
  });

  it("returns DataError in case of failing data source", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useDataSource(mockFailingDataSource)
    );

    expect(mockFailingDataSource).toHaveBeenCalled();
    expect(result.current).toMatchObject({
      data: null,
      error: false,
      loading: true,
    });

    await waitForNextUpdate();

    expect(result.current).toMatchObject({
      data: null,
      error: true,
      loading: false,
    });
  });

  it.todo("feature: force data refetch");

  it.todo("feature: dependency array that triggers data refetch");
});
