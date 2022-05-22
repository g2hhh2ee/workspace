import { useSession } from "next-auth/react";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import MiniProfile from "./MiniProfile";

function Feed() {
  const { data: session } = useSession();
  return (
    // <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
    <main
      className={`mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3 ${
        !session && "!max-w-3xl !grid-cols-1"
      }`}
    >
      {/* Section on the left */}
      <section className="col-span-2">
        {/* Stories on the top */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      {/* Section */}
      {session && (
        <section className="hidden md:col-span-1 xl:inline-grid">
          <div className="fixed">
            {/* Mini Profile */}
            <MiniProfile />
            {/* Suggestions */}
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
