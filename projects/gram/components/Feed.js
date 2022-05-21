import Stories from "./Stories";

function Feed() {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      {/* Section on the left */}
      <section className="col-span-2">
        {/* Stories on the top */}
        <Stories />
        {/* Posts */}
      </section>

      {/* Section */}
      <section>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;
