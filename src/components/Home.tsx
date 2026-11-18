import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 w-full h-16 bg-gray-200 text-white flex items-center px-6 z-50">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="bg-black">
              <NavigationMenuTrigger className="bg-black">
                Item One
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black">
                <NavigationMenuLink className="bg-black">
                  Link
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
