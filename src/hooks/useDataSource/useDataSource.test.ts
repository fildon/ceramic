import { renderHook } from "@testing-library/react-hooks";
import { useDataSource } from "./useDataSource";

describe("useDataSource", () => {
  const mockDataSource = jest.fn().mockResolvedValue("mock data");

  it("calls the dataSource on mount", async () => {
    const { waitForNextUpdate } = renderHook(() =>
      useDataSource(mockDataSource)
    );

    await waitForNextUpdate();

    expect(mockDataSource).toHaveBeenCalled();
  });

  it.todo("error case");

  it.todo("loading case");
});
