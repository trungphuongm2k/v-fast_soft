import Image from 'next/image';
function Custom404() {
  return (
    <main
      className={`w-full h-screen laptop:w-[90%] desktop:w-[80%] max-w-[1300px] pt-[100px] pb-[50px] m-auto`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <Image src="/404.png" alt="page not found" height={400} width={400} />
      </div>
    </main>
  );
}

export default Custom404;
