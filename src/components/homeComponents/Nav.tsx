import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <header className="flex items-center sticky top-0 bg-gray-200 h-16 px-6">
      <div className="flex items-center z-50 ml-auto">
        <Button variant="ghost" className="cursor-pointer">
          O projekcie
        </Button>
        <Button variant="ghost" className="cursor-pointer">
          Praktyka
        </Button>
        <Button variant="ghost" className="cursor-pointer">
          Psychologia korzystania
        </Button>
        <Button variant="ghost" className="cursor-pointer">
          Literatura
        </Button>
      </div>
    </header>
  );
}
