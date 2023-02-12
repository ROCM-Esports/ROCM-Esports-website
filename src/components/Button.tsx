// create a button component
import React, { useState } from "react"

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  const [x1, setX1] = useState(0);
  const [y1, setY1] = useState(0);
  const [x2, setX2] = useState(0);
  const [y2, setY2] = useState(0);
  const [x3, setX3] = useState(0);
  const [y3, setY3] = useState(0);
  const [x4, setX4] = useState(0);
  const [y4, setY4] = useState(0);
  const [x5, setX5] = useState(0);
  const [y5, setY5] = useState(0);
  const [x6, setX6] = useState(0);
  const [y6, setY6] = useState(0);
  const stdPoints = "300,150 225,280 75,280 0,150 75,20 225,20";
  const points = `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5} ${x6},${y6}`;
  return (
    <>
          <form>
    <label>
      Point 1:
      <input type="number" value={x1} onChange={(e) => setX1(e.target.valueAsNumber)} />
      <input type="number" value={y1} onChange={(e) => setY1(e.target.valueAsNumber)} />
    </label>
    <br />
    <label>
      Point 2:
      <input type="number" value={x2} onChange={(e) => setX2(e.target.valueAsNumber)} />
      <input type="number" value={y2} onChange={(e) => setY2(e.target.valueAsNumber)} />
    </label>
    <br />
    <label>
      Point 3:
      <input type="number" value={x3} onChange={(e) => setX3(e.target.valueAsNumber)} />
      <input type="number" value={y3} onChange={(e) => setY3(e.target.valueAsNumber)} />
    </label>
    <br />
    <label>
      Point 4:
      <input type="number" value={x4} onChange={(e) => setX4(e.target.valueAsNumber)} />
      <input type="number" value={y4} onChange={(e) => setY4(e.target.valueAsNumber)} />
      </label>
      <br />
      <label>
        Point 5:
        <input type="number" value={x5} onChange={(e) => setX5(e.target.valueAsNumber)} />
        <input type="number" value={y5} onChange={(e) => setY5(e.target.valueAsNumber)} />
      </label>
      <br />
      <label>
        Point 6:
        <input type="number" value={x6} onChange={(e) => setX6(e.target.valueAsNumber)} />
        <input type="number" value={y6} onChange={(e) => setY6(e.target.valueAsNumber)} />
      </label>
      <br />
      </form>
    
        
    
      <svg className="outline-container">
        {/* polygon in the shape of a hexagon */}
          <polygon points={points == '' ? stdPoints : points } fill="yellow" stroke="black" className="outline-line"></polygon>

       
        
      </svg>
    <button className="btn">
      {children}
    </button>
    </>
  )
}