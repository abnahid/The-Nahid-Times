import FindUsOn from "../FindUsOn";
import SocialLogin from "../SocialLogin";

const RightNav = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUsOn></FindUsOn>
    </div>
  );
};

export default RightNav;
