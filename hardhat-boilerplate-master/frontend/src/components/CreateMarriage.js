import React, { useState } from "react";

export function CreateMarriage() {
  const [date, setDate] = useState("");
  const [marie, setMarie] = useState("");
  const [mari, setMari] = useState("");

  const handlecreateMarriage = () => {
    // Réinitialisation des champs après l'ajout du marriage
    setDate("");
    setMarie("");
    setMari("");
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        {/* Formulaire pour ajouter un marriage */}
        <div className="col-6 p-4 text-center">
          <label>Marie: </label>
          <input
            type="text"
            value={marie}
            onChange={(e) => setMarie(e.target.value)}
          />
          <br />
          <label>Mari: </label>
          <input
            type="text"
            value={mari}
            onChange={(e) => setMari(e.target.value)}
          />
          <br />
          <label>Date: </label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <button
            className="btn btn-warning"
            type="button"
            onClick={handlecreateMarriage}
          >
            Add marriage
          </button>
        </div>
      </div>
    </div>
  );
}
