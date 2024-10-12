"use client";

import React from "react";

interface Reward {
  id: number;
  threshold: number;
  title: string;
  description: string;
  picture: string;
}

interface RewardsProps {
  stamps: number;
}

export function CoffeeRewards({ stamps }: RewardsProps) {
  const rewards = [
    {
      id: 1,
      threshold: 8,
      title: "Free one Coffee",
      description: "Get a free coffee with 100 points.",
      picture: "/pictures/3.png",
    },
    {
      id: 2,
      threshold: 8,
      title: "Free one Soft drink",
      description: "Get a free pastry with 200 points.",
      picture: "/pictures/1.webp",
    },
    {
      id: 3,
      threshold: 8,
      title: "Free one Vietnamese Iced Tea",
      description: "Get a free pastry with 300 points.",
      picture: "/pictures/2.webp",
    },
    // Add more rewards as needed
  ];
  const availableRewards = rewards.filter(
    (reward) => stamps >= reward.threshold
  );
  const lockedRewards = rewards.filter((reward) => stamps < reward.threshold);
  const handleRedeem = async () => {
    console.log("Redeem");
  };

  return (
    <div className="flex flex-col text-center justify-center gap-4">
      <div className="text-xl text-primary-foreground">
        {" "}
        Stamps earned: {stamps}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Available Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableRewards.length !== 0 ? (
            availableRewards.map((reward) => (
              <div key={reward.id} className="border p-4 rounded-lg shadow-md">
                <div className="flex w-full justify-between">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold mb-2">
                      {reward.title}
                    </h3>
                    <p className="mb-4">{reward.description}</p>
                    {/* confirm --> subtract points --> show notification -->  activated vouchers +1 --< scan - screen of staff show please apply voucher --> pay  */}
                    <button
                      className="bg-xanh text-white py-2 px-4 rounded hover:bg-xanh/90"
                      onClick={() => handleRedeem()}
                    >
                      Redeem
                    </button>
                  </div>
                  <div>
                    {" "}
                    <img
                      src={reward.picture}
                      alt={reward.title}
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No rewards available</div>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Locked Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lockedRewards.length !== 0 ? (
            lockedRewards.map((reward) => (
              <div
                key={reward.id}
                className="border p-4 rounded-lg shadow-md opacity-80"
              >
                <div className="flex w-full justify-between">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold mb-2">
                      {reward.title}
                    </h3>
                    <p className="mb-4">{reward.description}</p>
                    {/* confirm --> subtract points --> show notification -->  activated vouchers +1 --< scan - screen of staff show please apply voucher --> pay  */}
                    <p className="text-red-500">
                      Requires {reward.threshold} stamps
                    </p>
                  </div>
                  <div>
                    {" "}
                    <img
                      src={reward.picture}
                      alt={reward.title}
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Congratulations! You unlocked all the rewards!</div>
          )}
        </div>
      </div>
    </div>
  );
}
