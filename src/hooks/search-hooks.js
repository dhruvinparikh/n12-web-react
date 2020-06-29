import { useState } from "react";

export default function userSearchFormFiels(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event) {
      console.log(event.target.id)
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
}