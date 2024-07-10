"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import { Form } from "../ui/form";
import { useTransition } from "react";
import { SubmitHandler } from "react-hook-form";
import { fileSchema, FileSchema } from "@/validations/file.schema";
import { uploadFile } from "@/actions/file-action";
import { toast } from "sonner";

const initialValues: FileSchema = {
  name: "Untitled File",
  type: "file",
};

export default function CreateWhiteboardForm() {
  const [isPending, setIsPending] = useTransition();

  const onSubmit: SubmitHandler<FileSchema> = (data) => {
    setIsPending(() => {
      const fileData = {
        name: data.name,
        type: "file",
      };
      uploadFile(fileData);
      toast.success("Created successfully");
    });
  };
  return (
    <>
      <Box sx={{ mt: 4, px: 3 }}>
        <Form<FileSchema>
          validationSchema={fileSchema}
          onSubmit={onSubmit}
          useFormProps={{
            mode: "onChange",
            defaultValues: initialValues,
          }}
        >
          {({ register, formState: { errors } }) => (
            <Stack spacing={2} alignItems="center">
              <TextField
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                disabled={isPending}
                fullWidth
                label="Name"
                autoComplete="Name"
                sx={{
                  "& .MuiInputBase-root": {
                    minHeight: 56,
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 3, mb: 2 }}
                disabled={isPending}
              >
                Create
              </Button>
            </Stack>
          )}
        </Form>
      </Box>
    </>
  );
}
