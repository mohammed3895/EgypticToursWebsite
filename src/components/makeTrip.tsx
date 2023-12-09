"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";
import { toast } from "sonner";
import { ZodError } from "zod";
import { trpc } from "@/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { TEmailValidator } from "@/lib/validators/email-validator";

const MakeTrip = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEmailValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const router = useRouter();

  // const { data, isLoading, isError } = trpc.auth.sendQuery.useQuery({
  //   onError: (err) => {
  //     if (err instanceof ZodError) {
  //       toast.error(err.issues[0].message);

  //       return;
  //     }

  //     toast.error("Something went wrong. Please try again.");
  //   },
  //   onSuccess: () => {
  //     toast.success(`You'r has been sent to us, we will contact you soon`);
  //   },
  // });

  // const transporter = nodemailer.createTransport({
  //   host: process.env.NEXT_PUBLIC_MAILER_HOST as string,
  //   port: Number(process.env.NEXT_PUBLIC_MAILER_PORT),
  //   secure: true,
  //   auth: {
  //     user: process.env.NEXT_PUBLIC_MAILER_USERNAME as string,
  //     pass: process.env.NEXT_PUBLIC_MAILER_PASSWORD as string,
  //   },
  // });

  const onSubmit = ({
    email,
    phone,
    destination,
    adults,
    children,
    sDate,
    eDate,
  }: TEmailValidator) => {
    ({ email, phone, destination, adults, children, sDate, eDate });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <button className={buttonVariants({ variant: "ghost" })}>
          Make Trip
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Make your trip</DialogTitle>
          <DialogDescription>
            <div className="grid gap-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                  <div className="grid gap-1 py-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      {...register("email")}
                      className={cn({
                        "focus-visible:ring-red-500": errors.email,
                      })}
                      placeholder="you@example.com"
                    />
                    {errors?.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-1 py-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      {...register("phone")}
                      className={cn({
                        "focus-visible:ring-red-500": errors.phone,
                      })}
                      placeholder="+12 3456 789"
                    />
                    {errors?.phone && (
                      <p className="text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-1 py-2">
                    <Label htmlFor="email">Destination</Label>
                    <Input
                      {...register("destination")}
                      className={cn({
                        "focus-visible:ring-red-500": errors.destination,
                      })}
                      placeholder="Luxor, Cairo, ..."
                    />
                    {errors?.destination && (
                      <p className="text-sm text-red-500">
                        {errors.destination.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-1 py-2">
                    <Label htmlFor="adults">Adults</Label>
                    <Input
                      {...register("adults")}
                      className={cn({
                        "focus-visible:ring-red-500": errors.adults,
                      })}
                      type="number"
                      defaultValue={1}
                      placeholder="Number of Adults"
                    />
                    {errors?.adults && (
                      <p className="text-sm text-red-500">
                        {errors.adults.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-1 py-2">
                    <Label htmlFor="children">children</Label>
                    <Input
                      {...register("children")}
                      className={cn({
                        "focus-visible:ring-red-500": errors.children,
                      })}
                      type="number"
                      defaultValue={0}
                      placeholder="Number of children"
                    />
                    {errors?.children && (
                      <p className="text-sm text-red-500">
                        {errors.children.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="grid gap-1 py-2 w-full">
                      <Label htmlFor="password">Start Date</Label>
                      <Input
                        {...register("sDate")}
                        type="date"
                        className={cn({
                          "focus-visible:ring-red-500": errors.sDate,
                        })}
                      />
                      {errors?.sDate && (
                        <p className="text-sm text-red-500">
                          {errors.sDate.message}
                        </p>
                      )}
                    </div>
                    <div className="grid gap-1 py-2 w-full">
                      <Label htmlFor="password">End Date</Label>
                      <Input
                        {...register("eDate")}
                        type="date"
                        className={cn({
                          "focus-visible:ring-red-500": errors.eDate,
                        })}
                        placeholder="Password"
                      />
                      {errors?.eDate && (
                        <p className="text-sm text-red-500">
                          {errors.eDate.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button>
                    {/* {isLoading && (
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    )} */}
                    Send Query
                  </Button>
                </div>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MakeTrip;
