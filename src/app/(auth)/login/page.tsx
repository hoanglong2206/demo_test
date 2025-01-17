"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/lib/icon";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Logo } from "@/components";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const defaultValues: Partial<LoginFormValues> = {
  email: "",
  password: "",
};

const Login = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  const onSubmit = async (data: LoginFormValues) => {
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
            Sign in to your account
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    id="agreement"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />

                  <label
                    htmlFor="agreement"
                    className="text-gray-600 cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <button className="text" onClick={() => {}}>
                  Forgot password ?
                </button>
              </div>
              <Button className="w-full">Sign In</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.GitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Icons.Google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="text-center space-x-1">
            <p>
              Don’t have any account?{" "}
              <Link
                href="/signup"
                className="text-primary hover:text-gray-500 duration-100 ease-linear"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
