import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

// Browser
export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img
          className="w-80"
          src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.svg"
        />
        <p className="font-xs italic">
          NOTE: This is a clone of the app it is not a real version! Built for
          my further development.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() =>
                  signIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Server side render(middle)
export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
