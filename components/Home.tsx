import dynamic from "next/dynamic";

const SplineBackground = dynamic(
  () => import("./SplineBackground"),
  // 🔥 THIS FIXES EVERYTHING
);
export default function HomePage() {
  return (
    <main className="relative w-full h-screen">
      <SplineBackground />

      {/* Your Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">
          Learn what you need. Teach what you know.
        </h1>
        <p className="mt-4 text-lg">Welcome to SkillXchange 🚀</p>
      </div> */}
    </main>
  );
}
