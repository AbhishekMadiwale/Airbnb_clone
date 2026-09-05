import Header from "../components/Header";
import Banner from "@/components/Banner";

export const revalidate = 3600;

export default async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json(),
  );

  return (
    <div className="">
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull some data */}
          {exploreData.map((item) => (
            <h1 key={item.id}>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
}
