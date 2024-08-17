import Image from "next/image";
import { Profile, starters, mainCourses, drinks } from "./data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpenText, Home, RotateCcw } from "lucide-react";

export function FinalPage({ filterCombo }: { filterCombo: Profile }) {
  const startersCombo = filterCombo?.startersCombo;
  const mainCombo = filterCombo?.mainCombo;
  const drinkCombo = filterCombo?.drinkCombo;

  return (
    <div className="gap-2 mb-5">
      <div className="items-center lg:text-2xl text-xl">
        <h1>Many thanks for taking the quiz!</h1>
        <h2>Your result is as follows:</h2>
      </div>

      {filterCombo && (
        <>
          <h1 className="text-xanh text-xl lg:text-3xl font-bold text-pretty mt-2">
            Your nickname: {filterCombo?.name}
          </h1>
          <h1 className="text-primary-foreground text-md lg:text-2xl lg:px-44 lg:text-center text-pretty mb-2">
            What does it mean? {filterCombo?.description}
          </h1>
          {/* Starters */}
          <h1 className="text-2xl lg:text-4xl mb-2">Recommended Starters</h1>
          <div className="flex justify-center gap-2 mb-2">
            {startersCombo?.map((starter) => (
              <div
                key={starter}
                className="flex flex-col items-center sm:w-1/3"
              >
                <Image
                  src={`/pictures/quiz/result/${starter}.webp`}
                  alt={`Slide ${starter}`}
                  width={250}
                  height={250}
                  fetchPriority="high"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=""
                />
                <p className="text-center text-sm lg:text-lg">
                  {starters[starter - 1]?.name}
                </p>
              </div>
            ))}
          </div>
          {/* Mains */}
          <h1 className="text-2xl lg:text-4xl mb-2">
            Recommended Main Courses
          </h1>
          <div className="flex justify-center gap-2 mb-2">
            {mainCombo?.map((main) => (
              <div key={main} className="flex flex-col items-center sm:w-1/3">
                <Image
                  src={`/pictures/quiz/result/m${main}.webp`}
                  alt={`Slide ${main}`}
                  width={250}
                  height={250}
                  fetchPriority="high"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=""
                />
                <p className="text-center text-sm lg:text-lg">
                  {mainCourses[main - 1]?.name}
                </p>
              </div>
            ))}
          </div>
          {/* Drinks */}
          <h1 className="text-2xl lg:text-4xl mb-2">Recommended Drinks</h1>
          <div className="flex justify-center gap-2 mb-2 items-end">
            {drinkCombo?.map((drink) => (
              <div key={drink} className="flex flex-col items-center sm:w-1/3">
                <Image
                  src={`/pictures/quiz/result/d${drink}.webp`}
                  alt={`Slide ${drink}`}
                  width={250}
                  height={250}
                  fetchPriority="high"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=""
                />
                <p className="text-center text-sm lg:text-lg">
                  {drinks[drink - 1]?.name}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="flex mt-5 gap-5 justify-center">
        <Link href="/">
          <Button>
            Home <Home className="ml-2" />
          </Button>
        </Link>
        <Button onClick={() => (window.location.href = "/quiz")}>
          {" "}
          Restart <RotateCcw className="ml-2" />
        </Button>
        <Link href="https://www.viet80sonline.co.uk/">
          <Button>
            Full Menu <BookOpenText className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
