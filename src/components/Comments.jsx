import React from "react";

const Comments = () => {
  return (
    <div className="my-10">
      <h3 className="text-2xl text-white">Comments</h3>
      <div>
        <div className="flex flex-row items-center gap-5 my-3">
          <div className="w-8 h-8 bg-slate-600 rounded-full"></div>
          <p className="text-slate-400">Guest</p>
          <p className="text-slate-500 text-xs">now</p>
        </div>
        <div className="flex flex-row items-center gap-7 m-4">
          <p className="text-slate-300 font-bold">B</p>
          <p className="text-slate-300 italic">I</p>
          <p className="text-slate-300 text-xs underline">U</p>
          <p className="text-slate-300 text-lg">=</p>
        </div>
        <textarea
          className="rounded-lg resize-none bg-slate-800 border-1 p-3 border-slate-200"
          type="textarea"
          placeholder="Enter your comment.."
          rows={"2"}
          cols={"35"}
        />
      </div>
      <button className="text-white underline my-3 text-sm">
        Place Comment
      </button>
    </div>
  );
};

export default Comments;
