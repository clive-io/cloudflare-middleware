const got = require("got");
const { expect } = require("chai");
const ranges = require("./ranges");

async function collectAdvertisedRanges() {
  let result = [];
  for (const url of [
    "https://www.cloudflare.com/ips-v4",
    "https://www.cloudflare.com/ips-v6",
  ]) {
    const { body } = await got(url);
    const theseRanges = body.split("\n").filter(Boolean);
    result = result.concat(theseRanges);
  }
  return result;
}

describe("Ranges", function () {
  it("match Cloudflare's advertised ranges", async function () {
    const advertisedRanges = await collectAdvertisedRanges();

    expect(ranges).to.have.members(advertisedRanges);
    expect(advertisedRanges).to.have.members(ranges);
  });
});
