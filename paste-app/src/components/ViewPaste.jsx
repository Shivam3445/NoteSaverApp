
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes , updateToPastes} from "../redux/pasteSlice";


const ViewPaste = () => {
  const {id} = useParams();
  const allPastes = useSelector((state)=> state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];
  console.log("Final paste", paste);
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input

          className="p-2 rounded-2xl border mt-2
          w-[66%] pl-4"
          type="text"
          placeholder="Enter title here"
          value={paste.title}
          disabled
          
        />
        {/* <button
          onClick={createPaste}
         className="p-2 rounded-2xl border mt-2">
          {pasteId ? "update my paste" : "Create my paste"}
        </button> */}
      </div>
      <div className="mt-8">
        <textarea
        className="border rounded-2xl  min-w-[500px] p-4 "
          value={paste.content}
          placeholder="Enter content here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste
