"use clinet";
import { PaginationType } from "@/utils/typeinterface";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  pagination: PaginationType;
  path: string;
};

function Pagination(props: Props) {
  const router = useRouter();
  const [active, setActive] = React.useState(1);
  const pageNumberLimit = 10;
  const [minPageNumberLimit, setMinPageNumberLimit] = React.useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = React.useState(5);

  const getItemProps = (index: number) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => {
        router.push(`${props.path}?page=${index}`);
        setActive(index);
      },
    } as any);

  const next = () => {
    if (active === Number(props.pagination.total)) return;
    router.push(`${props.path}?page=${active + 1}`);
    setActive(active + 1);
    if (active + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const prev = () => {
    if (active === 1) return;
    router.push(`${props.path}?page=${active - 1}`);
    setActive(active - 1);
    if ((active - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4">
      <Button
        variant="text"
        className="items-center gap-2 hidden lg:flex"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {Array.from(
          { length: Number(props.pagination.total) },
          (num, index) => {
            if (index < maxPageNumberLimit + 1 && index > minPageNumberLimit)
              return (
                <IconButton key={index} {...getItemProps(index)}>
                  {index}
                </IconButton>
              );
            else {
              return null;
            }
          }
        )}
      </div>
      <Button
        variant="text"
        className="items-center gap-2 hidden lg:flex"
        onClick={next}
        disabled={active === Number(props.pagination.total)}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
      <div className="flex gap-2 lg:hidden">
        <Button
          variant="text"
          className="items-center gap-2 flex"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <Button
          variant="text"
          className="items-center gap-2 flex"
          onClick={next}
          disabled={active === Number(props.pagination.total)}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
