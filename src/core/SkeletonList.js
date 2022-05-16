import React from "react";

const fakeArray = Array(12).fill(true);

const SkeletonList = () => {
  return (
    <div className="dark:bg-gray-900 p-10 grid gap-5 grid-cols-4">
      {fakeArray.map((item, i) => (
        <div key={i} className="dark:bg-gray-900">
          <div className="shadow rounded-md max-w-sm w-full mx-auto">
            <div className="bg-slate-500 h-40 w-30 rounded"></div>
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-2 bg-slate-500 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-500 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonList;
