import { Composition } from "remotion";
import { MommentReels } from "./MommentReels";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MommentReels"
      component={MommentReels}
      durationInFrames={450}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{}}
    />
  );
};
