import { Palette } from "../elements/palette";

const ButtonCustom = () => {
    return {
        defaultProps: {
            style: {
                borderRadius: "8px",
                padding: "4px 12px",
                fontWeight: 600,
                "& .MuiButton-containedInherit": {
                    backgroundColor: Palette().grey[800],
                },
            },
        },
    };
};

export default ButtonCustom;
