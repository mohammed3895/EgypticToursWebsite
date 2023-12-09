import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <span className="w-10 h-10 rounded-full bg-primary animate-ping" />
    </div>
  );
};

export default Loading;
