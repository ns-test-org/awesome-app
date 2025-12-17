export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-400 relative overflow-hidden">
      {/* Clouds */}
      <div className="absolute top-20 left-10 w-32 h-16 bg-white rounded-full opacity-80 blur-sm"></div>
      <div className="absolute top-20 left-20 w-24 h-12 bg-white rounded-full opacity-80 blur-sm"></div>
      
      <div className="absolute top-40 right-32 w-40 h-20 bg-white rounded-full opacity-70 blur-sm"></div>
      <div className="absolute top-40 right-44 w-28 h-14 bg-white rounded-full opacity-70 blur-sm"></div>
      
      <div className="absolute bottom-32 left-1/4 w-36 h-18 bg-white rounded-full opacity-75 blur-sm"></div>
      <div className="absolute bottom-32 left-1/3 w-24 h-12 bg-white rounded-full opacity-75 blur-sm"></div>
      
      <div className="absolute top-1/3 right-1/4 w-32 h-16 bg-white rounded-full opacity-60 blur-sm"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-10 bg-white rounded-full opacity-60 blur-sm"></div>

      {/* Content */}
      <div className="text-center relative z-10">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Hello World
        </h1>
        <p className="text-xl text-white drop-shadow-md">
          Welcome to your simple template app
        </p>
      </div>
    </div>
  );
}


