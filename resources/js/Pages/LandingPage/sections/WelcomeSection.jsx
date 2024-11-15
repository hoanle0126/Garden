import HeadingButton from "@/Components/HeadingButton";
import { Palette } from "@/Theme/elements/palette";
import { alpha, Box, Button, Typography } from "@mui/material";
import React from "react";
import PlantPot from "resources/assets/plant_pot";

const WelcomeSection = () => {
    return (
        <div className="h-screen ">
            <section className="absolute bg-landing h-full bg-cover pt-[0px] px-[180px]">
                <div className="lg:w-[45%] pt-[80px]  flex flex-col lg:gap-[20px] gap-[10px]">
                    <Typography variant="h1">
                        Take Care Of <br /> The Trees, <br /> They Will Take
                        Care Of
                        <span className="text-secondary/70"> You.</span>
                    </Typography>
                    <Typography color={"text.secondary"}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book.
                    </Typography>
                    <div className="mt-[30px] flex gap-[30px]">
                        <HeadingButton variant="contained">
                            HeadingButton
                        </HeadingButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WelcomeSection;
