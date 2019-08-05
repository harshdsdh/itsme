import React from "react";

const NewFooter = () => {
  return (
    <div className="NewFooter" id="NewFooter">
      <NewFooterContent />
    </div>
  );
};
function NewFooterContent(props) {
  return (
    <div>
      <p>Copyright Harshit Mishra 2019 - reserved</p>
    </div>
  );
}
export default NewFooter;
