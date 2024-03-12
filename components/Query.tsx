import { useEffect, useState } from "react";
import classes from "./query.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchSearch, clearSearchData } from "../redux/Action";
import { SyntheticEvent } from "react";

const Query = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    router.push(`/search/${search}`);
  };
  const router = useRouter();
  const { query } = router.query;
  // console.log(query);
  interface rootState {
    serachData: {};
  }
  const data = useSelector((state: rootState) => state.serachData);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearch(query));
    return () => {
      dispatch(clearSearchData());
    };
  }, [query]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.logoImg}>
          <img onClick={() => router.push("/")} src="/logo.svg" alt="" />
        </div>
        <form action="" onSubmit={searchHandler}>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Here"
          />
          <button type="submit">
            <img src="/search.png" alt="" />
          </button>
        </form>
      </div>
      <hr />
      <div className={classes.searchContainer}>
        <p>
          Search Result for : <span>{data?.search_term}</span>
        </p>
        {data?.results?.map((res) => {
          return (
            <div key={res.position} className={classes.searchResult}>
              <a href={res.url} target="blank">
                <p>{res.url}</p>
                <p>{res.title}</p>
                <p>{res.description}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Query;
