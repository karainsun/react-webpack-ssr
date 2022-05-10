import React, { useEffect } from "react";
import { connect } from "react-redux";
import { produce } from "immer";
import { getUserInfo } from "../../store/actions";

function About(props) {
  useEffect(() => {
    if (!props.userInfo) {
      props.getUserInfo();
    }
  }, []);
  return (
    <div>
      {props.userInfo ? (
        <div
          dangerouslySetInnerHTML={{ __html: props.userInfo.introduction }}
        ></div>
      ) : null}
    </div>
  );
}
const mapStateToProps = produce((state) => {
  return {
    userInfo: state.index.userInfo,
  };
});
About.loadData = (store) => {
  return store.dispatch(getUserInfo());
};

export default connect(mapStateToProps, { getUserInfo })(About);
