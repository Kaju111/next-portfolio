import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h1 className="font-bold text-[40px] border-b-2  w-full font-primary">
            Lets start!
          </h1>
          <span className=" font-primary font-light  text-xs sm:text-sm md:text-lg   ">
            <span>
              I am a self taught MERN developer. Started my journey of coding
              around the mid of 2022 and enjoying the ride so far.
            </span>
            <span>
              <span className="font-bold border-b-2">Favourite language:</span>
              Javascript || Favourite stack: MERN (Node, React and Mongo
              Express)
            </span>
            <span>
              <span className="font-bold border-b-2">Hobbies:</span> 404 Not
              Found (no, seriously!! I really don't have any hobbies) OK, that
              is it. Don't ask me how I wrote that much
              <span>
                <s>content</s>
              </span>
              (sh!t) on my <span className="font-bold ">"About"</span> page. But
              still, if you do, the obvious answer would be:-
              <span className="font-bold ">I HAVE NOOOOOOOOO IDEA!!</span> Want
              to say hi, don't you even think about finding me on social media.
            </span>
            <span>
              Oh, wait, wait, wait!!! In case you want to check out my
              <Link href="https://github.com/Kaju111" className="font-bold">
                Github
              </Link>
              and
              <Link
                href="https://www.linkedin.com/in/kaju-saikia-2706422a9/"
                className="font-bold"
              >
                LinkedIn
              </Link>
              profiles.
            </span>
            <span>
              wait, wait!!!<span className="font-bold ">no, seriously!!</span>I
              enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </span>
            <span>
              I love learning new and better ways to create seamless user
              experiences with clean, efficient, and scalable code. I consider
              work an ongoing education, and I'm always looking for
              opportunities to work with those who are willing to share their
              knowledge as much as I want to learn. At the end of the day, my
              primary goal is to create something beautiful with people that
              bring out the best in me.
            </span>
          </span>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <span className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Demo project
            <Link
              href="https://blank-eight.vercel.app/"
              className="font-semibold text-base text-blue-300 "
            >
              click .
            </Link>
          </span>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <span className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Demo project
            <Link
              href="https://server-frontend.vercel.app/"
              className="font-semibold text-base text-blue-300 "
            >
              click .
            </Link>
          </span>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=Kaju111&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="KajuSaikia"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=Kaju111&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="kaju saikia"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,bootstrap,cloudflare,css,figma,firebase,git,github,html,jquery,linux,mongodb,mysql,nextjs,nodejs,npm,react,redux,replit,sass,tailwind,threejs,vercel,vite,vscode,express,materialui,vite`}
            alt="KajuSaikia"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Kaju111&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="KajuSaikia"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://kaju.vercel.app/"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=Kaju111&repo=portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
              alt="KajuSaikia"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
