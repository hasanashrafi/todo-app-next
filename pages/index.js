import Layout from "@/components/layout/Layout";
import HomePage from "@/components/templates/HomePage";
import { getSession } from "next-auth/react";


export default function Home() {

  return (
    <Layout>
      <main
        className={`min-h-screen p-4 `}
      >
        <div className="flex  rounded justify-center  h-full font-mono text-sm lg:flex">
          <HomePage />
        </div>
      </main>

    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}
