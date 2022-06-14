import React from "react";

const RadioButton = () => {
  return (
    <div class="inline fields">
      <label for="fruit"></label>
      <div class="field">
        <div class="ui radio checkbox">
          <input
            type="radio"
            name="fruit"
            checked=""
            tabindex="0"
            class="hidden"
          />
          <label>Apples</label>
        </div>
      </div>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="fruit" tabindex="0" class="hidden" />
          <label>Oranges</label>
        </div>
      </div>
    </div>
  );
};

export default RadioButton;
