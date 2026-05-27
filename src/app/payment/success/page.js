"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  CheckCircle2,
  AlertTriangle,
  Loader2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { ApiClient } from "@/lib/api-client";

function PaymentSuccess() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Extract sessionId matching backend requirements
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState("verifying"); // 'verifying' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const confirmationAttempted = useRef(false);

  useEffect(() => {
    // Return early if no sessionId is present or verification already ran
    if (!sessionId || confirmationAttempted.current) {
      if (!sessionId) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setStatus("error");
        setErrorMessage(
          "Missing payment checkout session reference configuration.",
        );
      }
      return;
    }

    const confirmPaymentSession = async () => {
      try {
        confirmationAttempted.current = true;
        setStatus("verifying");

        // Call your backend verifying route with verification token handled inside ApiServer
        const response = await ApiClient({
          path: "/confirm-session",
          method: "POST",
          body: { sessionId },
          auth: true,
        });

        if (!response?.ok) {
          setStatus("error");
          if (response.status === 400) {
            setErrorMessage(
              "Already paid!",
            );
            return;
          }
        } else {
          setStatus("success");
        }
      } catch (error) {
        console.error("Payment confirmation catch error:", error);
        setStatus("error");
        setErrorMessage("An unexpected server synchronization error occurred.");
      }
    };

    confirmPaymentSession();
  }, [sessionId]);

  return (
    <div className="min-h-screen w-full bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden text-center">
        {/* Subtle background decorative premium gradient */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-60" />

        {/* STATE 1: VERIFYING WITH BACKEND ROUTE */}
        {status === "verifying" && (
          <div className="space-y-6 py-4 animate-fade-in">
            <div className="mx-auto h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Loader2 className="size-6 animate-spin" />
            </div>
            <div className="space-y-2">
              <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                Verifying Transaction...
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-70 mx-auto leading-relaxed">
                Securing your upgrade allocation context with our ledger node.
                Please do not close this browser window.
              </p>
            </div>
          </div>
        )}

        {/* STATE 2: PAYMENT VERIFIED & PRO PLAN ACCESSIBLE */}
        {status === "success" && (
          <div className="space-y-6 py-2 animate-fade-in">
            <div className="mx-auto h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm shadow-emerald-500/10">
              <CheckCircle2 className="size-8" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 tracking-wide uppercase select-none">
                Upgrade Successful
              </span>
              <h1 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 pt-1">
                Welcome to Hireloop Pro
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-77.5 mx-auto">
                Your payment of <strong>$20.00</strong> was received perfectly.
                All advanced premium recruiting modules are unlocked on your
                account.{" "}
                <span className="font-bold text-green-400">
                  You may need to re-authenticate to see the effect.
                </span>
              </p>
            </div>

            {/* Quick Summary Reference Card */}
            <div className="bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-zinc-800/80 rounded-xl p-3.5 flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-zinc-400" />
                <span>Session ID Verified</span>
              </div>
              <span className="font-mono text-[10px] tracking-tight bg-zinc-200/50 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-600 dark:text-zinc-400 max-w-35 truncate">
                {sessionId}
              </span>
            </div>

            <button
              onClick={() => router.push("/dashboard")}
              className="w-full h-11 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-100 text-white dark:text-zinc-950 text-sm font-semibold rounded-xl transition-all outline-none flex items-center justify-center gap-2 group active:scale-[0.98] shadow-md shadow-black/10"
            >
              <span>Go to Workspace Dashboard</span>
              <ArrowRight className="size-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}

        {/* STATE 3: FAILURE OR INVALID SESSIONS */}
        {status === "error" && (
          <div className="space-y-6 py-2 animate-fade-in">
            <div className="mx-auto h-14 w-14 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 dark:text-rose-400">
              <AlertTriangle className="size-7" />
            </div>

            <div className="space-y-2">
              <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Verification Failed
              </h1>
              <p className="text-sm text-zinc-500 dark:text-rose-400/90 leading-relaxed max-w-72.5 mx-auto bg-rose-500/5 py-1 px-3 border border-rose-500/10 rounded-xl font-medium">
                {errorMessage ||
                  "We could not securely validate this Stripe session."}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 h-11 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-semibold rounded-xl transition-all outline-none"
              >
                Retry Check
              </button>
              <button
                onClick={() => router.push("/support")}
                className="flex-1 h-11 bg-zinc-900 dark:bg-zinc-800 text-white text-sm font-semibold rounded-xl transition-all outline-none"
              >
                Contact Support
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function StripeClientPaymentSuccessPage() {
  return (
    <Suspense>
      <PaymentSuccess />
    </Suspense>
  );
}
