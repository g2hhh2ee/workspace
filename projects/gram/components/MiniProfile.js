function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="https://avatars.githubusercontent.com/u/57996351?s=96&v=4"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">jihee</h2>
        <h3 className="text-sm text-gray-400">Welcome To Instagram</h3>
      </div>

      <button className="text-sm font-semibold text-blue-400">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
