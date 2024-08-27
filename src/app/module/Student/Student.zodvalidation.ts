import { z } from "zod";

const addschool = z.object({
  name: z.string({
    required_error: "name is required",
  }),
  address: z.string({
    required_error: "address is required",
  }),
  latitude: z.number({
    required_error: "latitude is required",
  }),
  longitude: z.number({
    required_error: "longitude is required",
  }),
});

export const SchoolValidation = {
  addschool,
};
