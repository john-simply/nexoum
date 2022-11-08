import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
        <div className='landing-hero'>
          <div className='landing-hero__content max-width'>
            <h1 class='heading'>
              <span class='first-line'>Why going digital is</span>
              <span class='second-line'>your key to success</span>
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
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
