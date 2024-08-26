import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { Button } from "../ui/button";
import  { useState } from "react";

const TodoFilter = () => {
    const [position, setPosition] = useState("bottom")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button className="bg-primary-gradient font-semibold" >Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56  p-3 rounded-xl border-2 bg-gray-100 mt-2">
        <DropdownMenuLabel className="font-semibold" >Priority base Filter</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup className="" value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem className="px-1 hover:bg-black hover:text-white" value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="px-1 hover:bg-black hover:text-white" value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="px-1 hover:bg-black hover:text-white" value="low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
