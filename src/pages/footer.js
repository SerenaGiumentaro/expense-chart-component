export default function Footer() {
    const numberStyle = {
         fontWeight:'700',
         color: 'hsl(25, 47%, 15%)'
    }
    const captionStyle = {
      color: "hsl(28, 10%, 53%)" , fontSize: '16px'
    }
  return (
    <>
      <hr className="my-5"></hr>
      <div className="flex justify-between items-end">
        <div>
          <p style={captionStyle}>Total this month</p>
          <p style={numberStyle} className="text-3xl">$478.33</p>
        </div>
        <div>
          <p style={numberStyle} className="text-xs text-right">+2.4%</p>
          <p style={captionStyle}>from last month</p>
        </div>
      </div>
    </>
  );
}
