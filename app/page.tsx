export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[800px] mx-auto">
        <h1 className="text-6xl mb-4">The best Journaling App there is</h1>
        <p className="text-2xl text-white/60 mb-4">
          This is the best journaling app, period. You just need to be honest
          (with yourself).
        </p>
        <div>
          <button className="bg-blue-600 p-4 rounded-lg text-xl">
            get started
          </button>
        </div>
      </div>
    </div>
  );
}
