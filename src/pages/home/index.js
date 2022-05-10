import React, { useEffect } from "react";
import { connect } from "react-redux";
import { produce } from "immer";
import { getBanners } from "../../store/actions";

const Home = (props) => {
  useEffect(() => {
    if (!props.banners) {
      props.getBanners();
    }
  }, []); 

  return (
    <div>
      <ul>
        {props.banners ? props.banners.map((post) => {
          return (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <div>{post.desc}</div>
            </li>
          );
        }) : null}
      </ul>
    </div>
  );
};

const mapStateToProps = produce((state) => {
  return {
    banners: state.index.banners,
  };
});
Home.loadData = (store) => {
  return store.dispatch(getBanners())
}

export default connect(mapStateToProps, {getBanners})(Home);
