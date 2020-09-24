import React from "react";

function RMInfo(props) {
 
  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      {props.rm_infos.map(rm_info => {
        return ( 
            <div key={rm_info.id} className="rm_info">
                <h3>{rm_info.name}</h3>
                <h4>Dimension: {rm_info.dimension}</h4>
                <p>Quote: {rm_info.content}</p>
            </div>
        )
      })}
    </div>
  );
}

export default RMInfo;
