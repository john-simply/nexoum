import Head from "next/head";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // DOM REFERENCES
  const landingContent = useRef();

  useLayoutEffect(() => {
    console.log("yes");
    let ctx = gsap.context(() => {
      gsap.set(".image-wrapper img", {
        width: "80%",
        borderRadius: "10px",
      });

      gsap.to(".image-wrapper img", {
        scrollTrigger: {
          trigger: ".heading",
          start: "top-=10 top+=100",
          scrub: 1,
          markers: true,
          ease: "ease",
        },
        width: "100%",
        borderRadius: "0px;",
      });
    }, landingContent);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Head>
        <title>Nexoum</title>
        <meta
          name='description'
          content='Nexoum Creative - Building unique experiences for the web.'
        />
        <link rel='icon' href='/favicon.ico' />

        {/* typography */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Monda:wght@400;700&family=Rufina:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main>
        <section className='landing-hero' ref={landingContent}>
          <div className='landing-hero__content max-width'>
            <h1 class='heading'>
              <span className='first-line'>Why going digital is</span>
              <span className='second-line'>your key to success</span>
            </h1>
            <p className='text'>
              Helping start-ups, tech companies and businesses launch new
              heights in the digital world. Through creative designs, a user
              centered approach and a pretty awesome, transparent team.
            </p>
          </div>

          <figure className='image-wrapper'>
            <Image
              src='/assets/images/digital-branding.png'
              alt=''
              width={1920}
              height={500}
            />
          </figure>
        </section>

        <section className='main-wrapper'>
          <div className='main-wrapper__content max-width'>
            <h2 className='heading'>
              <span class='first-line'>What working with us</span>
              <span class='second-line'>Means for the future</span>
              <span class='third-line'>of your business</span>
            </h2>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
