import Head from "next/head";
import Container from "@/components/Container";
import { MenuComponent } from "@/components/Menu";
import Footer from "@/components/Footer";
import { CreateContentComp } from "@/components/CreateContent";

export default function HomePage(){
  return (
    <>
      <Head>
        <title>The Games &copy; 2024</title>
        <meta
          name="description"
          content="Consumo em React de uma API de Games"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <MenuComponent/>
        <Container>
            <CreateContentComp/>
        </Container>
      </main>
      <Footer/>
    </>
  );
};
