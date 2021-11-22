import { GetIP, GetList } from "./example.api";

describe("list test", () => {
  it("list include", () => {
    expect([1, 2, 3, 4, 5, 6, 9]).toContain(2);
  });

  // it("list contain", () => {
  //   expect([1, 2, 3, 4, 5, 6, 9]).toContain(8);
  // });
});

describe("api test", () => {
  it("list data", async () => {
    const res = await GetList();

    expect([0, 1]).toContain(res.status);
  });

  it("ip address", async () => {
    const res = await GetIP();

    expect([0, 1]).toContain(res.status);
  });
});
