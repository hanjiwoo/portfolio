"use client";
import { db } from "@/firebase/firebase";
import { typeOfPost } from "@/types/Types";
import {
  addDoc,
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { ref } from "firebase/storage";
import React, { useEffect, useState } from "react";

export default function Post() {
  const [posts, setPosts] = useState<typeOfPost[] | undefined>([]);
  const [text, setText] = useState<string>();
  const [message, setMessage] = useState<string>();
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };
  const onClickHandeler = async () => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        content: text,
        createdAt: Date.now(),
      });
      //   console.log("Document written with ID: ", docRef.id);
      setMessage("제출했습니다.");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      setText("");
    } catch (e) {
      //   console.error("Error adding document: ", e);
      setMessage(`에러 : ${e}`);
      setTimeout(() => {
        setMessage("");
      }, 2000);
      setText("");
    }
  };

  const getPostFN = async () => {
    const postRef = collection(db, "posts");
    const postQuery = query(postRef, orderBy("createdAt", "desc"), limit(10));

    const unsubscribe = onSnapshot(postQuery, (querySnapshot) => {
      let postData: typeOfPost[] = [];
      querySnapshot.forEach((doc) => {
        postData.unshift({ ...doc.data(), id: doc.id });
      });
      setPosts(postData);
    });
  };

  useEffect(() => {
    getPostFN();
  }, []);
  return (
    <div className="bg-green-300 flex flex-col gap-5 p-[10px]">
      <h1>방명록</h1>
      <p>좋은 말씀 부탁드립니다.</p>
      <section className="bg-yellow-100 w-[90vw] h-[30vh] font-bold flex flex-col items-center justify-end">
        {posts?.map((post) => {
          return <p key={post.id}>{post.content}</p>;
        })}
      </section>
      <section>
        <textarea
          value={text}
          onChange={(e) => onChangeHandler(e)}
          maxLength={60}
          style={{ resize: "none", width: "90%" }}
        ></textarea>
        <button onClick={onClickHandeler} className="bg-purple-300">
          게시
        </button>
      </section>
      <p className="flex justify-center text-red-500">{message}</p>
    </div>
  );
}
