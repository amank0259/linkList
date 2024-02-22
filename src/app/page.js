import React from "react";

export default function Home() {
  return (
    <>
      <main>
        <section className="pt-32 ">
          <div className="max-w-md mb-6">
            <h1 className="text-6xl font-bold">
              Your one link <br /> for Everything.
            </h1>
            <h2 className="text-gray-500 text-xl mt-6">
              One link to help you share everything you create, your social profiles, contact info and more on one page.
            </h2>
          </div>
          <form className="inline-flex items-center shadow-md shadow-gray-500">
            <span className="bg-white py-4 pl-4">linklist.to/</span>
            <input type="text" className="py-4" placeholder="username" />
            <button type="submit" className="bg-blue-500 text-white py-4 px-6">
              Join for free
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
