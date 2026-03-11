import TopMenuItem from "./TopMenuItem"
export default function TopMenu() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      background: "black",
      padding: "50px",
      fontSize: "50px"
    }}>

      <TopMenuItem title="Booking" pageRef="/booking/"/>

      <img src="/img/logo.png" className="h-75" />

    </div>
  )
}