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
  const [loadVideo, setLoadVideo] = useState(false);
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
        onHoverStart={() => {
          setTimeout(() => {
            setLoadVideo(true);
          }, 600);
        }}
        onHoverEnd={() => {
          if (!isExpanded) {
            setLoadVideo(false);
            setTimeout(() => {
              setLoadVideo(false);
            }, 600);
          }
        }}
        animate={"initial"}
      >
        <motion.div
          layoutId={`image-${id}`}
          className="relative aspect-video rounded overflow-hidden"
        >
          {!loadVideo ? (
            <Image
              src="/arcane.jpg"
              fill
              alt="Netflix"
              className="object-cover"
            />
          ) : (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/arcane.mp4"
            />
          )}
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
            <CardInfoHover setIsExpanded={setIsExpanded} />
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quisquam
        commodi deleniti expedita, eos inventore assumenda enim iure quidem id
        cum in officia harum? Voluptate magnam nisi libero vel aspernatur
        facilis dolores sequi illo fugit velit tempora ex adipisci quod expedita
        consequuntur numquam molestiae dolore, inventore hic, recusandae enim
        impedit explicabo mollitia? Quos tenetur totam blanditiis quibusdam
        natus illum consequuntur ipsa, veniam ex possimus odit atque ipsum. Sed
        assumenda quas ipsa quaerat atque maxime accusantium omnis sit
        repellendus quisquam magni beatae nulla cum odit tenetur asperiores
        commodi, quis nihil ullam provident doloremque! Quaerat ducimus odio,
        atque veniam rerum tempora iure!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quisquam
        commodi deleniti expedita, eos inventore assumenda enim iure quidem id
        cum in officia harum? Voluptate magnam nisi libero vel aspernatur
        facilis dolores sequi illo fugit velit tempora ex adipisci quod expedita
        consequuntur numquam molestiae dolore, inventore hic, recusandae enim
        impedit explicabo mollitia? Quos tenetur totam blanditiis quibusdam
        natus illum consequuntur ipsa, veniam ex possimus odit atque ipsum. Sed
        assumenda quas ipsa quaerat atque maxime accusantium omnis sit
        repellendus quisquam magni beatae nulla cum odit tenetur asperiores
        commodi, quis nihil ullam provident doloremque! Quaerat ducimus odio,
        atque veniam rerum tempora iure!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quisquam
        commodi deleniti expedita, eos inventore assumenda enim iure quidem id
        cum in officia harum? Voluptate magnam nisi libero vel aspernatur
        facilis dolores sequi illo fugit velit tempora ex adipisci quod expedita
        consequuntur numquam molestiae dolore, inventore hic, recusandae enim
        impedit explicabo mollitia? Quos tenetur totam blanditiis quibusdam
        natus illum consequuntur ipsa, veniam ex possimus odit atque ipsum. Sed
        assumenda quas ipsa quaerat atque maxime accusantium omnis sit
        repellendus quisquam magni beatae nulla cum odit tenetur asperiores
        commodi, quis nihil ullam provident doloremque! Quaerat ducimus odio,
        atque veniam rerum tempora iure!
      </p>
    </div>
  );
};
