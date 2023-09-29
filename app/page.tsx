import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <Card className="w-[350px] select-none">
        <CardHeader className="flex flex-row space-x-2">
          <CardDescription className="text-xl mt-2">1.</CardDescription>
          <CardDescription className="text-xl ">
            In which decade was the American Institute of Electrical Engineers
            (AIEE) founded?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <RadioGroup defaultValue="n" className="grid grid-row-3 gap-4">
              <div>
                <RadioGroupItem value="a" id="a" className="peer sr-only" />
                <Label
                  htmlFor="a"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {/* <Icons.card className="mb-3 h-6 w-6" /> */}A
                </Label>
              </div>
              <div>
                <RadioGroupItem value="b" id="b" className="peer sr-only" />
                <Label
                  htmlFor="b"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {/* <Icons.paypal className="mb-3 h-6 w-6" /> */}B
                </Label>
              </div>
              <div>
                <RadioGroupItem value="c" id="c" className="peer sr-only" />
                <Label
                  htmlFor="c"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {/* <Icons.apple className="mb-3 h-6 w-6" /> */}C
                </Label>
              </div>
              <div>
                <RadioGroupItem value="d" id="d" className="peer sr-only" />
                <Label
                  htmlFor="d"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {/* <Icons.apple className="mb-3 h-6 w-6" /> */}D
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Back</Button>
          <Button>Next</Button>
        </CardFooter>
      </Card>

      {/* <div className=" min-h-screen flex-row items-center justify-between p-2">
        <Button variant="default">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
      </div> */}
    </main>
  );
}
