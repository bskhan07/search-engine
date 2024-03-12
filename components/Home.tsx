import React, { useState } from "react";
import classes from "./Home.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SyntheticEvent } from "react";
import { useRouter } from "next/router";
const Home = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const router = useRouter();
  const searchHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!search) {
      return;
    } else {
      // dispatch(fetchSearch(search, router.push) as any);
      router.push(`/search/${search}`)
    }
  };

  interface rootState {
    serachData: {};
  }
  
  return (
    <div className={classes.homeContainer}>
      <div className={classes.box}>
        <div className={classes.logoDiv}>
          <img src="/logo.svg" />
        </div>
        <form onSubmit={searchHandler} action="">
          <input
            type="type"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search-Here"
          />
          <button type="submit">
            {" "}
            <img src="/search.png" alt="" />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
