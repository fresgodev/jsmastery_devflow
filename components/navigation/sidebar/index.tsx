import Link from "next/link";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

import NavLinks from "../navbar/NavLinks";

export default function AppSideBar() {
  return (
    <div className="background-light900_dark200 hidden h-screen basis-1/6 p-4 sm:block">
      <div className="no-scrollbar mt-5 flex h-[calc(100vh-50px)] flex-col justify-between overflow-y-auto">
        <section className="flex flex-col gap-6 pt-16">
          <NavLinks />
        </section>

        <div className="flex flex-col gap-3">
          <Link href={ROUTES.SIGN_IN}>
            <Button className="small-medium btn-secondary mb-3 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="primary-text-gradient text-base">Log In</span>
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <Link href={ROUTES.SIGN_UP}>
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
              <span className="text-base">Sign Up</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
