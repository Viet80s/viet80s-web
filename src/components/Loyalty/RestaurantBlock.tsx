export function RestaurantBlock({ points }: { points: number }) {
  return (
    <div className="rounded-xl m-5 justify-center text-center items-center bg-yellow-200 border-double border-primary border-4 h-auto w-auto flex flex-col p-3">
      <div className="text-xanh text-3xl mb-3">RESTAURANT</div>
      <div className="flex justify-between items-center w-full px-4">
        <div className="">
          <span className="text-5xl text-red-700">{points}</span> points
        </div>
        <div className="w-[150px]">
          <h1>Tap to earn points, rewards and more</h1>
        </div>
      </div>
    </div>
  );
}
