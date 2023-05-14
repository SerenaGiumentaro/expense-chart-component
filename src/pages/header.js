export default function HeaderApp() {
  const headerStyle = {
    background: 'hsl(10, 79%, 65%)',
    borderRadius: '10px',
    height: '6rem'
  }
  return (
    <header style={headerStyle} className="flex justify-between items-center my-5 p-5">
        <div className="">
        <p className="text-red-50 text-xs mb-2">My balance</p>
        <p className="text-red-50 text-2xl font-bold">$921.48</p>
        </div>
        <div className="m-2">

      <svg
        width="72"
        height="48"
        viewBox="0 0 72 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <circle fill="#382314" cx="48" cy="24" r="24" />
          <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
        </g>
      </svg>
        </div>
    </header>
  );
}
