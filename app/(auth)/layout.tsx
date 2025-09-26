import { buttonVariants } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="relative flex min-h-svh flex-col items-center justify-center">
        <Link
          href="/"
          className={buttonVariants({
            variant: "ghost",
            className: "absolute left-4 top-4 md:left-8 md:top-8",
          })}
          aria-label="Back to homepage"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>
        <div className="flex w-full max-w-sm flex-col gap-6 p-6 sm:max-w-md">
          <Link
            href="/"
            className="flex items-center gap-2 self-center font-medium text-primary hover:text-primary-dark"
            aria-label="Klaus LMS homepage"
          >
            <Image
              src={Logo} width={32} height={32}
              alt="Klaus LMS"/>


            KlausLMS
          </Link>
          {children}

          <div className="text-balance text-center text-xs text-muted-foreground">
            By Click continue, you agree to our <span className="hover:text-primary hover:underline">Terms of service</span>
            {" "}
            and <span className="hover:text-primary hover:underline">Privacy policy</span>.
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}