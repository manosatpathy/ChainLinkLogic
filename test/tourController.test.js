const { query } = require("express");
const {
  getConcertsByArtistAndCity,
  getAfterPartiesByCity,
  getMerchandiseStallsByStallName,
} = require("../controllers/tourController");
const axiosInstance = require("../lib/axios.lib");

jest.mock("../lib/axios.lib.js", () => ({
  get: jest.fn(),
}));

describe("Tour controller test", () => {
  test("should fetch concert by artist and city", async () => {
    const mockResponse = {
      data: {
        concerts: [
          {
            id: 7,
            artist: "Bruno Mars",
            venue: "Park Theater",
            city: "Las Vegas",
            date: "2024-11-15T21:00:00.000Z",
            ticketPrice: 8530,
            seatCategory: "General",
          },
        ],
      },
    };

    axiosInstance.get.mockResolvedValue(mockResponse);
    const req = { query: { artist: "Bruno Mars", city: "Las Vegas" } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };
    await getConcertsByArtistAndCity(req, res);
    expect(axiosInstance.get).toHaveBeenCalledWith(
      `/concerts/search?artist=Bruno Mars&city=Las Vegas`
    );
    expect(res.json).toHaveBeenCalledWith(mockResponse.data);
  });

  test("should get after parties by city", async () => {
    const mockResponse = {
      data: {
        afterParties: {
          id: 9,
          location: "Moonlight Bar",
          city: "Orlando",
          date: "2024-12-09T21:00:00.000Z",
          ticketPrice: 860,
        },
      },
    };

    axiosInstance.get.mockResolvedValue(mockResponse);
    const req = { query: { city: "Orlando" } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };
    await getAfterPartiesByCity(req, res);
    expect(axiosInstance.get).toHaveBeenCalledWith(
      `/afterParties/search?city=Orlando`
    );
    expect(res.json).toHaveBeenCalledWith(mockResponse.data);
  });

  test("should get merchandise stalls By stall name", async () => {
    const mockResponse = {
      merchandiseStalls: [
        {
          id: 1,
          stallName: "Rocking Tees",
          itemAvailable: "T-Shirts",
          price: 250,
        },
      ],
    };
    axiosInstance.get.mockResolvedValue(mockResponse);
    const req = { query: { stallName: "Rocking Tees" } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };
    await getMerchandiseStallsByStallName(req, res);
    expect(axiosInstance.get).toHaveBeenCalledWith(
      `/merchandiseStalls/search?stallName=Rocking Tees`
    );
    expect(res.json).toHaveBeenCalledWith(mockResponse.data);
  });
});
