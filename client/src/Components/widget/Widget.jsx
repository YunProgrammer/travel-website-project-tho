import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;
  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "livingroom":
      data = {
        alt: 'livingroom',
        src: 'https://images.pexels.com/photos/2847871/pexels-photo-2847871.jpeg'
      };
      break;
    case "bathroom":
      data = {
        alt: 'bathroom',
        src: 'https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg'
      };
      break;
    case "kitchen":
      data = {
        alt: 'kitchen',
        src: 'https://images.pexels.com/photos/4993556/pexels-photo-4993556.jpeg'
      };
      break;
    case "diningroom":
      data = {
        alt: 'diningroom',
        src: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg'
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="img"  >
        <img src={data.src} alt={data.alt} style={{ height: "100%", borderRadius: "1%" }}></img>
      </div>

    </div>
  );
};

export default Widget;
