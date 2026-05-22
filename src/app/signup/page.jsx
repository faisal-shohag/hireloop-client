"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Card } from "@heroui/react";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
    role: "seeker",
  });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    console.log(form)
    try {
      const result = await signUp.email({
        name: form.name,
        image: form.image,
        email: form.email,
        password: form.password,
        role: form.role,
      });
      if (result.error) {
        setError(result.error.message || "Sign up failed");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError(err.message || "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold text-xl mb-6"
          >
            <Image
              loading="eager"
              className="object-cover h-auto w-auto"
              width={100}
              height={40}
              style={{ width: "auto", height: "auto" }}
              alt="logo"
              src={"/logo.png"}
            />
          </Link>
          <h1 className="text-2xl font-bold ">Create your account</h1>
          <p className="mt-1 text-muted text-sm">
            Start finding your dream job today
          </p>
        </div>

        <Card className="border">
          <Form
            className="flex flex-col gap-4 w-full"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              setForm({
                name: formData.get("name"),
                image: formData.get("image"),
                email: formData.get("email"),
                password: formData.get("password"),
                role: formData.get("role"),
              });
              handleSubmit(e);
            }}
          >
            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Role selector */}
            <div>
              <Label>I am a...</Label>
              <div className="grid grid-cols-2 gap-3 mt-1.5">
                {[
                  { value: "seeker", label: "Job Seeker", emoji: "🔍" },
                  { value: "recruiter", label: "Recruiter", emoji: "🏢" },
                ].map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, role: r.value }))}
                    className={`flex flex-col items-center gap-1.5 rounded-xl border py-3 text-sm font-medium transition-colors ${
                      form.role === r.value
                        ? "border bg-indigo-500/10 text-indigo-500 font-bold"
                        : "border text-gray-400 hover:border-gray-600"
                    }`}
                  >
                    <span className="text-xl">{r.emoji}</span>
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <TextField
              isRequired
              name="name"
              type="text"
              validate={(value) => {
                if (value.length < 2) {
                  return "Name must be at least 2 characters";
                }
                return null;
              }}
            >
              <Label>Full Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>

              <TextField
              isRequired
              name="image"
              type="url"
             
            >
              <Label>Image URL</Label>
              <Input placeholder="Image URL" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="you@example.com" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              placeholder="Min. 8 characters"
              type={showPw ? "text" : "password"}
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <div className="relative flex gap-2 w-full">
                <Input className={"w-full"}  type={showPw ? "text" : "password"} />
                <Button type="button" onClick={() => setShowPw(!showPw)}>
                  {showPw ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors"
              >
                {loading ? (
                  "Creating account..."
                ) : (
                  <>
                    Get Started <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Sign in
              </Link>
            </p>
          </Form>
        </Card>
      </div>
    </div>
  );
}
