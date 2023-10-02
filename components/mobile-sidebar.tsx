import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "@/components/sidebar";

const MobileSidebar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-0" side={"left"}>
          <SideBar />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
