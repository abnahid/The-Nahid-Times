import Ads from "../Ads";
import FindUsOn from "../FindUsOn";
import QZone from "../QZone";
import SocialLogin from "../SocialLogin";

const RightNav = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUsOn></FindUsOn>
      <QZone></QZone>
      <Ads></Ads>
    </div>
  );
};

export default RightNav;
