import React from "react";

const Flowdetails = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          We didn't reinvent the wheel
        </h2>
        <p className="font-light text-gray-500 sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">
          We are strategists, designers and developers. Innovators and problem
          solvers. Small enough to be simple and quick, but big enough to
          deliver the scope you want at the pace you need.
        </p>
        <iframe
          className="mx-auto mt-8 w-full max-w-2xl h-64 rounded-lg lg:mt-12 sm:h-96"
          src="https://www.youtube.com/embed/YszONjKpgg4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default Flowdetails;
