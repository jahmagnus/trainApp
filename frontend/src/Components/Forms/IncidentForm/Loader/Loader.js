import React from "react";

function Loader({ message }) {
  return (
    <div class="ui segment">
      <div class="ui active dimmer">
        <div class="ui massive text loader">{message}</div>
      </div>
    </div>
  );
}

export default Loader;
