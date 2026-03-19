import React from "react";

interface Step4Props {
  formData: {
    meal: string;
    people: number;
    restaurant: string;
    dishes: { name: string; servings: number }[];
  };
  onBack: () => void;
}

const displayFormData = (formData: Step4Props["formData"]) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <p>
        <strong>Meal:</strong> {formData.meal}
      </p>
      <p>
        <strong>Number of People:</strong> {formData.people}
      </p>
      <p>
        <strong>Restaurant:</strong> {formData.restaurant}
      </p>
      <div style={{ marginTop: "10px" }}>
        <strong>Dishes:</strong>
        {formData.dishes.length > 0 ? (
          <ul style={{ marginLeft: "20px", marginTop: "5px" }}>
            {formData.dishes.map((dish, index) => (
              <li key={index}>
                {dish.name} - Servings: {dish.servings}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ marginLeft: "20px", marginTop: "5px" }}>No dishes added.</p>
        )}
      </div>
    </div>
  );
};

const Step4: React.FC<Step4Props> = ({ formData, onBack }) => {
  const handleSubmit = () => {
    console.log("Final Submission Data:", formData);
    alert("Check console for submitted data!");
  };

  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          border: "2px solid black",
          boxShadow: "4px 4px 0px black",
        }}
      >
        <div style={{ padding: "5px 15px", borderRight: "2px solid black" }}>
          Step 1
        </div>
        <div style={{ padding: "5px 15px", borderRight: "2px solid black" }}>
          Step 2
        </div>
        <div style={{ padding: "5px 15px", borderRight: "2px solid black" }}>
          Step 3
        </div>
        <div style={{ padding: "5px 15px", backgroundColor: "#89b4fa" }}>
          Review
        </div>
      </div>

      <div
        style={{
          marginTop: "80px",
          width: "100%",
          maxWidth: "600px",
          textAlign: "left",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Current Form Data:</h3>
        <pre
          style={{
            backgroundColor: "#f4f4f4",
            padding: "20px",
            border: "2px dashed black",
            fontSize: "14px",
            overflowX: "auto",
          }}
        >
          {/* {JSON.stringify(formData, null, 2)} */}
          {displayFormData(formData)}
        </pre>
      </div>

      <div style={{ display: "flex", gap: "400px", marginTop: "100px" }}>
        <button
          onClick={onBack}
          style={{
            padding: "8px 20px",
            border: "2px solid black",
            boxShadow: "4px 4px 0px black",
            fontWeight: "bold",
          }}
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          style={{
            padding: "8px 25px",
            backgroundColor: "white",
            border: "2px solid black",
            boxShadow: "4px 4px 0px black",
            fontWeight: "bold",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
