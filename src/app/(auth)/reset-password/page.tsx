"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Logo } from "@/components";

const resetPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  oldPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  newPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  confirmNewPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

const defaultValues: Partial<ResetPasswordFormValues> = {
  email: "",
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

const ResetPassword = () => {
  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues,
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };
  return (
    <div className="w-full flex min-h-full flex-col items-center justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <Card className="sm:mx-auto sm:w-full sm:max-w-md">
        <CardHeader className="space-y-8">
          <CardTitle className="text-2xl">
            <Logo isDark />
          </CardTitle>
          <CardDescription className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Reset Password
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Your old password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Your new password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmNewPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm your new password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
