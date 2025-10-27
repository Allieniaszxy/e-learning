import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-gray-800 max-md:text-4xl">
          Empower your team
        </h1>
        <h1 className="text-7xl font-bold text-gray-800 mt-2.5 max-md:text-4xl">
          Elevate your skills
        </h1>
        <p className="text-2xl text-gray-600 w-[800px] max-w-[90%] text-center mx-auto mt-3 max-md:max-w-[90%] max-md:text-[15px] max-md:w-full">
          Provide cutting-edge professional development with industry-leading
          courses and expert institutions
        </p>
        <div className="mt-4 flex gap-3 justify-center max-md:flex max-md:flex-col max-md:items-center">
          <Button variant="primary" className="max-md:w-[90%]">
            Explore Courses
          </Button>
          <Button variant="secondary" className="max-md:w-[90%]">
            Schedule a demo
          </Button>
        </div>
      </div>
    </main>
  );
}
