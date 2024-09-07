import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CheckCheck, Loader2, Mail, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
interface Subscribers {
  id: number;
  email: string;
}
const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [showInitialText, setShowInitialText] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/";

  const checkEmail = async (email: string) => {
    const subscribers: Subscribers[] = await fetch(
      `${baseUrl}api/subscriber/`
    ).then((res) => res.json());
    console.log(subscribers);
    const subscribered = subscribers.map((subscriber) => subscriber.email);
    const alreadySubed = subscribered.includes(email || "");
    return alreadySubed;
  };

  const insertEmailToDatabase = async (email: string) => {
    try {
      const alreadySubed = await checkEmail(email);
      if (alreadySubed) {
        toast.error("You are already subscribed!");
        setSubmitting(false);
        setShowInitialText(true);
        setSubmitted(false);
      } else {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        });
        if (response.ok) {
          setSubmitting(false);
          setShowInitialText(false);
          setSubmitted(true);
          setDisabled(true);
        }
      }
    } catch (error: any) {
      console.error("Error inserting data:", error.message);
      setError(true);
      setShowInitialText(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    setShowInitialText(false);
    setSubmitting(true);
    insertEmailToDatabase(email);
    setEmail("");
  };

  return (
    <>
      <section className="bg-xanh lg:bg-transparent lg:w-[400px] w-full dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
          <div className="mx-auto max-w-screen-md">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-gray-900 text-primary dark:text-white">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light sm:text-gray-500 text-white md:mb-12 sm:text-xl dark:text-gray-400 sm:hidden block">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm">
                <div className="relative w-full">
                  <Label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Email address
                  </Label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <Mail />
                  </div>
                  <Input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    disabled={disabled}
                    className="py-3 px-5 w-full bg-primary text-md font-semibold text-center text-primary-foreground rounded-lg border cursor-pointer border-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {showInitialText && <>Subscribe, cancel anytime</>}
                    {submitting && (
                      <>
                        <Loader2 className="size-4 mr-2 animate-spin" />{" "}
                        Subscribing ...
                      </>
                    )}
                    {submitted && (
                      <>
                        <CheckCheck className="size-4 mr-2 animate-pulse" /> All
                        set! Thanks for signing up!
                      </>
                    )}
                    {error && (
                      <>
                        <X className="size-4 mr-2 animate-pulse" /> An error has
                        occured ...
                      </>
                    )}
                  </Button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left sm:text-gray-500 text-white newsletter-form-footer dark:text-gray-300">
                We care about the protection of your data.{" "}
                <a
                  href="/terms-and-policies"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewsLetter;
