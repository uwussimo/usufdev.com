import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MenuIcon, SearchIcon } from "lucide-react";
import { items } from "./items";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export function MobileNav() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex lg:hidden" size={"icon"} variant={"ghost"}>
          <MenuIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>usufdev.com</DialogTitle>
        </DialogHeader>

        <div>
          <div className="w-full flex items-center justify-between">
            <Button variant={"ghost"} size={"icon"}>
              <SearchIcon />
            </Button>
            <ModeToggle />
          </div>
          <div className="flex flex-col items-center gap-2">
            {items.map((item) => (
              <Button key={item.name} variant={"link"} size={"lg"} asChild>
                <Link href={item.path}>{item.name}</Link>
              </Button>
            ))}
          </div>
        </div>
        <DialogFooter className="flex items-center gap-4">
          <Button className="w-full">Login</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
