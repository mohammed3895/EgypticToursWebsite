import { z } from "zod";

export const EmailValidator = z.object({
  email: z.string().optional(),
  phone: z.string(),
  sDate: z.date(),
  eDate: z.date(),
  adults: z.number().min(1),
  children: z.number().min(0).optional(),
  destination: z.string(),
});

export type TEmailValidator = z.infer<typeof EmailValidator>;
