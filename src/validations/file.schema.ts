import { z } from "zod";

export const fileSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    type: z.string().optional(),
});

export type FileSchema = z.infer<typeof fileSchema>;