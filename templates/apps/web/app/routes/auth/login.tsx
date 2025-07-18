import { User, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { authClient } from "../../../lib/auth-client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router";

const signUpSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type SignInFormData = z.infer<typeof signInSchema>;

function SignUpForm() {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });
  const navigation = useNavigate();
  const {
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        callbackURL: "/dashboard",
        fetchOptions: {
          onSuccess() {
            navigation("/dashboard");
          },
        },
      });

      if (result.error) {
        form.setError("root", {
          message: result.error.message || "Something went wrong",
        });
      }
    } catch (err) {
      form.setError("root", {
        message: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="joedoe@mail.com" {...field} />
              </FormControl>
              <FormDescription>Enter your full name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="joedoe@mail.com" {...field} />
              </FormControl>
              <FormDescription>Enter your email address.</FormDescription>
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
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormDescription>
                Password must be at least 6 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Re-enter your password to confirm.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Global Form/Server Error */}
        {errors?.root && (
          <Alert
            variant="destructive"
            className="bg-destructive/10 border-destructive/10"
          >
            <AlertDescription>{errors?.root.message}</AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Creating Account...
            </>
          ) : (
            <>
              <User className="h-4 w-4 mr-2" />
              Sign Up
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}

function SignInForm() {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });
  const {
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: "/dashboard",
      });

      if (result.error) {
        form.setError("root", {
          message: result.error.message || "Something went wrong",
        });
      }
    } catch (err) {
      form.setError("root", {
        message: "Something went wrong",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="joedoe@mail.com" {...field} />
              </FormControl>
              <FormDescription>Enter your email address.</FormDescription>
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
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormDescription>Enter your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {errors?.root && (
          <Alert
            variant="destructive"
            className="bg-destructive/10 border-destructive/10"
          >
            <AlertDescription>{errors?.root.message}</AlertDescription>
          </Alert>
        )}
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Signing In...
            </>
          ) : (
            <>
              <Lock className="h-4 w-4 mr-2" />
              Sign In
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}

export default function Login() {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Authentication</CardTitle>
        <CardDescription>
          Sign in to your account or create a new one
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 relative">
            <motion.div
              className="absolute inset-y-0 w-1/2 bg-background rounded-md shadow-sm border border-input/30"
              initial={false}
              animate={{
                x: activeTab === "signin" ? "0%" : "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
            <TabsTrigger
              value="signin"
              className="relative z-10 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="relative z-10 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="space-y-4">
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            > */}
            <SignInForm />
            {/* </motion.div> */}
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
            > */}
            <SignUpForm />
            {/* </motion.div> */}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
