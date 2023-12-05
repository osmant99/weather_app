import React from "react";
export default function Weather({ userInput, setUserInput, handleSearch }) {
  return (
    <>
      <div className="container my-5">
        <div class="mb-3 d-flex justify-content-center align-items-center">
          <input
            type="text"
            class="form-control m_input me-2"
            id="user_city"
            placeholder="Input the city to check the weather"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button type="button" class="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}
