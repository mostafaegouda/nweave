import Image from "next/image";
import { motion } from "framer-motion";
import ActionButton from "@/components/ActionButton";
import {
  ChevronDownIcon,
  PlayIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useId, useRef, useState } from "react";

type Props = {};
const Card = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const id = useId();
  useEffect(() => {
    if (isExpanded) {
      document.querySelector("html")!.style.overflow = "hidden";
    } else {
      document.querySelector("html")!.style.overflow = "auto";
    }
  }, [isExpanded]);
  return (
    <>
      <motion.div
        variants={{
          initial: {
            scale: 1,
            zIndex: 0,
            originY: "170%",
            transition: { zIndex: { delay: 1 } },
          },
          hover: {
            scale: 1.5,
            zIndex: 1,
            transition: { delay: 1, delayChildren: 1, ease: "easeOut" },
          },
        }}
        initial={"initial"}
        whileHover={isExpanded ? "" : "hover"}
        animate={"initial"}
      >
        <motion.div
          layoutId={`image-${id}`}
          className="relative aspect-video rounded overflow-hidden"
        >
          <Image
            src="/arcane.jpg"
            fill
            alt="Netflix"
            className="object-cover"
          />
        </motion.div>
        <motion.div layoutId={`info-${id}`}>
          <motion.div
            variants={{
              initial: {
                display: "none",
                opacity: 0,
                transition: { delay: 0.2 },
              },
              hover: { display: "block", opacity: 1 },
            }}
            className="p-3 absolute w-full bg-zinc-900 space-y-3 text-xs rounded"
          >
            {/* {isExpanded ? (
            <CardInfoExpanded setIsExpanded={setIsExpanded} />
          ) : ( */}
            <CardInfoHover setIsExpanded={setIsExpanded} />
            {/* )} */}
          </motion.div>
        </motion.div>
      </motion.div>
      {isExpanded && (
        <div className="fixed inset-0 bg-black/50 flex justify-center z-50 overflow-y-scroll">
          <motion.div className="w-[800px] mt-10">
            <motion.div
              layoutId={`image-${id}`}
              initial={{ zIndex: 50 }}
              className="relative aspect-video rounded overflow-hidden"
            >
              <button
                className="absolute z-10 top-5 right-5 bg-black text-white p-[0.1rem] rounded-full"
                onClick={() => setIsExpanded(false)}
              >
                <XMarkIcon className="w-7 h-7" />
              </button>
              <Image
                src="/arcane.jpg"
                fill
                alt="Netflix"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              layoutId={`info-${id}`}
              className="p-10 bg-zinc-900 space-y-3 rounded"
            >
              <CardInfoExpanded setIsExpanded={setIsExpanded} />
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
};
export default Card;

type CardInfoHoverProps = {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};
const CardInfoHover = (props: CardInfoHoverProps) => {
  return (
    <>
      <div className="flex gap-2">
        <ActionButton>
          <PlayIcon className="w-4 h-4" />
        </ActionButton>
        <ActionButton>
          <PlusIcon className="w-4 h-4" />
        </ActionButton>
        <ActionButton>
          <HandThumbUpIcon className="w-4 h-4" />
        </ActionButton>
        <ActionButton
          className="ml-auto"
          onClick={() => props.setIsExpanded(true)}
        >
          <ChevronDownIcon className="w-4 h-4" />
        </ActionButton>
      </div>
      <div className="flex gap-1 items-center">
        <span className="text-green-400 font-semibold">92% Match</span>
        <span className="border border-zinc-400 px-1">18+</span>
        <span>6 Seasons</span>
        <span className="border border-zinc-400 px-1 py-0 text-[0.5rem] leading-none rounded-sm">
          HD
        </span>
      </div>
      <div className="flex">
        {["Action", "Adventure", "Fantasy"].map((genre, i) => (
          <div key={i}>
            {i !== 0 && <span className="mx-2 text-zinc-500">•</span>}
            <span>{genre}</span>
          </div>
        ))}
      </div>
    </>
  );
};
type CardInfoExpandedProps = {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};
const CardInfoExpanded = (props: CardInfoExpandedProps) => {
  return (
    <div className="">
      {/* <div className="flex gap-2">
        <ActionButton>
          <PlayIcon className="w-4 h-4" />
        </ActionButton>
        <ActionButton>
          <PlusIcon className="w-4 h-4" />
        </ActionButton>
        <ActionButton>
          <HandThumbUpIcon className="w-4 h-4" />
        </ActionButton>
        <ActionButton
          className="ml-auto"
          onClick={() => props.setIsExpanded(true)}
        >
          <ChevronDownIcon className="w-4 h-4" />
        </ActionButton>
      </div> */}
      <div className="flex gap-1 items-center">
        <span className="text-green-400 font-semibold">92% Match</span>
        <span>2021</span>
        <span className="border border-zinc-400 px-1">18+</span>
        <span>6 Seasons</span>
        <span className="border border-zinc-400 px-1 py-0 text-[0.5rem] leading-none rounded-sm">
          HD
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        laboriosam at eum velit neque, maxime dolorem enim aspernatur placeat
        nihil totam eligendi nesciunt itaque beatae, nemo necessitatibus.
        Cupiditate, libero obcaecati.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
        eos deserunt aut culpa vel labore error voluptates accusantium sit, quam
        debitis quaerat tempora dolor doloribus aliquam illum tenetur modi.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
        eos deserunt aut culpa vel labore error voluptates accusantium sit, quam
        debitis quaerat tempora dolor doloribus aliquam illum tenetur modi.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
        eos deserunt aut culpa vel labore error voluptates accusantium sit, quam
        debitis quaerat tempora dolor doloribus aliquam illum tenetur modi.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
        eos deserunt aut culpa vel labore error voluptates accusantium sit, quam
        debitis quaerat tempora dolor doloribus aliquam illum tenetur modi.
      </p>
    </div>
  );
};
