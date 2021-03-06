import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

function Stories() {
  const { data: session } = useSession();
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      // everytime when maps through, the map return a value form the loop
      ...faker.helpers.contextualCard(),
      id: i, // number of the loop
    }));
    // console.log(suggestions);
    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm 
      border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black"
    >
      {session && (
        <Story
          key={session?.user?.uid}
          img={session?.user?.image}
          username={session?.user?.username}
        />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
