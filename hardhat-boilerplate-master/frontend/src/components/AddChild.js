import React, { useState } from "react";

export function AddChild({ addChild }) {
  const [age, setAge] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleAddChild = () => {
    // Appel de la fonction addChild avec les valeurs saisies
    addChild(firstName, lastName, age);
    // Réinitialisation des champs après l'ajout de l'enfant
    setFirstName("");
    setLastName("");
    setAge("");
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        {/* Formulaire pour ajouter un enfant */}
        <div className="col-6 p-4 text-center">
          <label>Nom: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <label>Prenom: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <label>Age: </label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <button
            className="btn btn-warning"
            type="button"
            onClick={handleAddChild}
          >
            Add Child
          </button>
        </div>
      </div>
    </div>
  );
}
