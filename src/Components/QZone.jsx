import image01 from "../assets/qZone1.png";
import image02 from "../assets/qZone2.png";
import image03 from "../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-zinc-100 p-4">
      <h2 className="font-semibold mb-3">Q-Zone</h2>
      <div className="flex flex-col">
        <img src={image01} alt="qZone1" />
        <img src={image02} alt="qZone2" />
        <img src={image03} alt="qZone3" />
      </div>
    </div>
  );
};

export default QZone;
