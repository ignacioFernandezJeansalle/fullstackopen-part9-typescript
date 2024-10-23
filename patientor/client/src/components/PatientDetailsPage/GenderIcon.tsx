import { Gender } from "../../types";
import { Male as MaleIcon, Female as FemaleIcon, Accessibility as AccessibilityIcon } from "@mui/icons-material";

const GenderIcon = ({ gender }: { gender: string }) => {
  switch (gender) {
    case Gender.Male:
      return <MaleIcon fontSize="large" />;
    case Gender.Female:
      return <FemaleIcon fontSize="large" />;
    default:
      return <AccessibilityIcon fontSize="large" />;
  }
};

export default GenderIcon;
