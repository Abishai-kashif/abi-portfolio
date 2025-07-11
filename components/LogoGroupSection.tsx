import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { skillsList } from "@/data";

function LogoGroupSection() {
  return (
    <section className="2xl:container-layout">
      {/* Desktop  */}
      <div className="hidden md:block h-full">
        {/*  border-t-[0.1px] border-dark-purple/60 pt-4*/}
        <InfiniteMovingCards
          pauseOnHover={false}
          items={skillsList.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="h-[60px] w-[60px] bg-[#ebebeb] text-dark-purple rounded-md flex-center group"
            >
              <div className="group-hover:text-light-purple transition-all duration-300">
                <Icon size={48} aria-label={name} />
              </div>
            </div>
          ))}
          speed="normal"
        />
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-y-6 my-5">
        <InfiniteMovingCards
          pauseOnHover={false}
          items={skillsList.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="h-[50px] w-[50px] bg-[#ebebeb] text-dark-purple rounded-md flex-center group"
            >
              <div className="transition-all duration-300 group-hover:text-light-purple">
                <Icon
                  size={46}
                  aria-label={name}
                  className="h-[40px] w-[40px]"
                />
              </div>
            </div>
          ))}
          speed="normal"
        />
        <InfiniteMovingCards
          pauseOnHover={false}
          items={skillsList.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="h-[50px] w-[50px] bg-[#ebebeb] text-dark-purple rounded-md flex-center group"
            >
              <div className="transition-all duration-300 group-hover:text-light-purple">
                <Icon
                  size={46}
                  aria-label={name}
                  className="h-[40px] w-[40px]"
                />
              </div>
            </div>
          ))}
          direction="right"
          speed="normal"
        />
      </div>
    </section>
  );
}

export default LogoGroupSection;
