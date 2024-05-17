"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as React from "react";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

type TeamSwitcherProps = PopoverTriggerProps;

type Semester = {
  label: string;
  value: string;
};

export default function SemesterSwitcher({ className }: TeamSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false);
  const [selectedTeam, setSelectedTeam] = React.useState<Semester>({
    label: "2° Trimestre",
    value: "2",
  });

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a team"
            className={cn("w-[200px] justify-between", className)}
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                src="https://img.icons8.com/?size=48&id=UhvCGZLcO5RO&format=png"
                alt={selectedTeam.label}
              />
              <AvatarFallback>
                {selectedTeam.label.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {selectedTeam.label}
            <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className=" w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandEmpty>No team found.</CommandEmpty>
              <CommandItem
                key="0"
                onSelect={() => {
                  setSelectedTeam({ label: "1° Trimestre", value: "1" });
                  setOpen(false);
                }}
                className="text-sm"
              >
                <Avatar className="mr-2 h-5 w-5">
                  <AvatarImage
                    src="https://img.icons8.com/?size=48&id=UhvCGZLcO5RO&format=png"
                    alt="1° Trimestre"
                  />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                1° Trimestre
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedTeam.value === "1" ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
              <CommandItem
                key="1"
                onSelect={() => {
                  setSelectedTeam({ label: "2° Trimestre", value: "2" });
                  setOpen(false);
                }}
                className="text-sm"
              >
                <Avatar className="mr-2 h-5 w-5">
                  <AvatarImage
                    src="https://img.icons8.com/?size=48&id=UhvCGZLcO5RO&format=png"
                    alt="2° Trimestre"
                    className="grayscale"
                  />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                2° Trimestre
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedTeam.value === "2" ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
              <CommandItem
                key="2"
                onSelect={() => {
                  setSelectedTeam({ label: "3° Trimestre", value: "3" });
                  setOpen(false);
                }}
                className="text-sm"
              >
                <Avatar className="mr-2 h-5 w-5">
                  <AvatarImage
                    src="https://img.icons8.com/?size=48&id=UhvCGZLcO5RO&format=png"
                    alt="3° Trimestre"
                    className="grayscale"
                  />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                3° Trimestre
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedTeam.value === "3" ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create team</DialogTitle>
          <DialogDescription>
            Add a new team to manage products and customers.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Team name</Label>
              <Input id="name" placeholder="Acme Inc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">Subscription plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <span className="font-medium">Free</span> -{" "}
                    <span className="text-muted-foreground">
                      Trial for two weeks
                    </span>
                  </SelectItem>
                  <SelectItem value="pro">
                    <span className="font-medium">Pro</span> -{" "}
                    <span className="text-muted-foreground">
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
